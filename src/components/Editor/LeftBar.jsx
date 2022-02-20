import React from 'react';
import '../../CSS/Editor/LeftBar.css'
import uuid from 'react-uuid';

const onDragStart = (event, description) => {
    console.log('dragstart:', description);
    event.dataTransfer.setData("desc", description);
    event.dataTransfer.setData("id", uuid());
}

export default function LeftBar(){
    return(
        <div className='editor_left'>
            <DragTexts/>
            <div></div>
            <div></div>
        </div>
    );
}

function DragTexts(){
    return (
        <div>
            <div className='textContainer' draggable={true} onDragStart={(e) => onDragStart(e, "header")} ><h1>Header</h1></div>
            <div className='textContainer'draggable={true} onDragStart={(e) => onDragStart(e, "text")}>Text</div>
        </div>  
    );
}

