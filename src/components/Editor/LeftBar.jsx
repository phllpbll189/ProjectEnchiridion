import React from 'react';
import '../../CSS/Editor/LeftBar.css'
import uuid from 'react-uuid';

function onDragStart(event, tag) {
    console.log('dragstart:', tag);
    event.dataTransfer.setData("tag", tag);
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
            <div 
            className='textContainer hoverSelector' 
            draggable={true} 
            onDragStart={(e) => onDragStart(e, "header")}
            data-testid="headerDND"
            >
                <h1>Header</h1>
            </div>

            <div 
            className='textContainer'
            draggable={true} 
            onDragStart={(e) => onDragStart(e, "text")}
            >
                Text
            </div>
        </div>  
    );
}

