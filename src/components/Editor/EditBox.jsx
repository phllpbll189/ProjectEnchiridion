import { ControlPointDuplicate } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
import React, {useState } from 'react';
import uuid from 'react-uuid';
import '../../CSS/Editor/EditBox.css'
import CustomList from './CustomList'

const headerCSS = {width: "100%",textAlign: "center"} // this will ahve to be part of state soon.

//will be used to determine index
function onDragOver(ev){
    ev.preventDefault();
}

//editor area
export default function EditBox(){
    const [containers, setContainers] = useState([]);  
    function onDrop(ev){ //append new column
        setContainers([
            ...containers,
            containerGen(ev.dataTransfer.getData("tag"), ev.dataTransfer.getData("id"))
        ]);
    }
    
    //generate html and place in array
    const elementArr = containers.map(container => {
        console.log("generating Child Containers..")
        return (
            <Container 
            key={container.id} tag={container.tag}>
            </Container>
        )
    });

    //Holds child components horizontally
    //return a div with array
    return (
        <div className='main' data-testid="EditBox" onDragOver={onDragOver}>
            {elementArr}
            <div data-testid='editor-spacing' className='spacing' onDrop={(e) => onDrop(e)}/>
        </div>
    );
}


// TODO move Container into editbox
// then move containerstate up into Editbox
// The only thing that container will need is the index of its properties
// then put the whole json in state

function Container(props){
    const [containerStyle, setContainerStyle] = useState()
    const [children, setChildren] = useState([{ 
        "id": uuid(),
        "tag": props.tag,
        "style": {},
        "content": props.tag
    }]); //generate preset text if any

    function containersDrop(ev){  //ondrop, add new element in json format
        setChildren(generateJSON(ev.dataTransfer.getData("id"), ev.dataTransfer.getData("tag"), children)); 
    }

    function innerDrag(ev, index){
       
        console.log('dragstart:', children[index].content);
        ev.dataTransfer.setData("tag", children[index].tag);
        ev.dataTransfer.setData("id", children[index].id);
        
        let arr = [];
        
        for(let i = 0; i<=children.length - 1; i++){
            if(i != index){
                arr.push(children[i])
            }
        }
        
    }

    
    const arr = []//children.map(item => { //map over the items dropped in the container and generate them.
        for(let i = 0; i <= children.length - 1; i++){
            arr.push(
                <div 
                className={"spacer"}
                id={"spacer " + i}
                key={"spacer " + i}
                //ondrop here
                />
            )
      

            console.log("render " + children[i].tag);
            switch(children[i].tag){
                case "header":                              
                    arr.push( 
                        <h1 
                        draggable={true}
                        className="GenHeader"
                        contentEditable="true" 
                        key={children[i].id} 
                        style={headerCSS}
                        data-testid="Dropped-headerDND"
                        onDragStart={(ev, i) => innerDrag(ev, i)}
                        onChange={(e) => {children[i] = e.target.value}}
                        >
                            {children[i].content}
                        </h1>);
                    break;

                case "text":
                    arr.push(<p key={children[i].id} contentEditable="true" draggable={true} style={children[i].style}>{children[i].content}</p>);
                    break;

                case "list":
                    arr.push(<CustomList
                        draggable={true}
                        id={children[i].id}
                    />)
                    break;
            }
    }
    arr.push(
        <div 
        className={"spacer"}
        id={"spacer " + children.length}
        key={"spacer " + children.length}
        //ondrop here
        />
    )


    return(                            
        <div className="GenContainers"  // will have to make this part of state soon
        onDrop={(e) => {
            containersDrop(e)
        }}>
                {
                    arr //all of the generated jsx
                }
        </div>
    );  
}




//===============HELPER FUNCTIONS============================================
function generateJSON (id, tag, children){ //genereates new json child object
    return ([
        ...children, 
        {"id": id,
        "tag": tag,
        "style":{},
        "content": tag
        }
    ]);
}

function containerGen(tag, id) { //generates new container
    return(
        {"Type": "container",
        "tag": tag,
        "id": id}
    );
}




//========================================================================

export {
    Container
}
    
    
    