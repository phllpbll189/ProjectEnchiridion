import React, {useState } from 'react';
import uuid from 'react-uuid';
import '../../CSS/Editor/EditBox.css'

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
          

            <div className='spacing' onDrop={(e) => onDrop(e)}/>
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

    const arr = children.map(item => { //map over the items dropped in the container and generate them.
        console.log("render " + item.tag);
        
        switch(item.tag){
            case "header":                              
                return ( 
                    <h1 
                    className="GenHeader"
                    contenteditable="true" 
                    key={item.id} 
                    style={headerCSS}
                    data-testid="Dropped-headerDND"
                    >
                        {item.content}
                    </h1>
                );

            case "text":
                return (<p key={item.id} contenteditable="true" style={item.style}>{item.content}</p>);

            default:
                return null
        }
    });

    return(                            
        <div className="GenContainers"  // will have to make this part of state soon
        onDragOver={onDragOver} 
        onDrop={(e) => containersDrop(e)}>
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
    
    
    