import React from 'react';
import '../../CSS/Editor/LeftBar.css'
import uuid from 'react-uuid';
import {ReactComponent as List} from './../../CSS/IMAGES/List.svg'

function onDragStart(event, tag) {
    console.log('dragstart:', tag);
    event.dataTransfer.setData("tag", tag);
    event.dataTransfer.setData("id", uuid());       
}

export default function LeftBar(){
    return (
        <div className='editor_left'>
            <div 
            className='textContainer hoverSelector' 
            draggable={true} 
            onDragStart={(e) => onDragStart(e, "header")}
            data-testid="drag-header"
            >
                <h1>Header</h1>
            </div>

            <div 
            className='textContainer hoverSelector'
            draggable={true} 
            data-testid='drag-plain-text'
            onDragStart={(e) => onDragStart(e, "text")}
            >
                Text
            </div>

            <div 
            onDragStart={(e) => onDragStart(e, "list")}
            draggable={true}
            data-testid='drag-list'>
                <List className="drag-list hoverSelector"/>
            </div >
        </div>  
    );
}

