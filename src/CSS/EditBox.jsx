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
    function onDrop(ev){ //append new container
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
            </Container>);
    });
    //Holds child components horizontally
    //return a div with arra
    return (
        <div className='editorStyle' onDragOver={onDragOver}>
            <div className='column'>
                {elementArr}
            </div>
            <div className='main'onDragOver={onDragOver} onDrop={(e) => onDrop(e)}></div>
        </div>
    );
}

function Container(props){
    const [containerStyle, setContainerStyle] = useState()
    const [children, setChildren] = useState([{
        "id": uuid(),
        "tag": props.tag,
        "style": {}
    }]); //generate preset text if any

    function containersDrop(ev){  //ondrop, add new element in json format
        setChildren(generateJSON(ev.dataTransfer.getData("id"), ev.dataTransfer.getData("tag"), children)); 
    }
    
    //GENERATES ELEMENTS WITHIN CONTAINER
    const arr = children.map(item => {
        console.log("render " + item.tag);
        
        switch(item.tag){
            case "header":                              
                return ( <h1 className="GenHeader" key={item.id} style={headerCSS}>Header</h1>);

            case "text":
                return (<p key={item.id} style={item.style}>text</p>);

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

//HELPER FUNCTIONS
function generateJSON (id, tag, children){ //genereates new json child object
    return ([
        ...children, 
        {"id": id,
        "tag": tag,
        "style":{}
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
    
    
    