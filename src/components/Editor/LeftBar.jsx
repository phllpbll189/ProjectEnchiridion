import React from 'react';
import '../../CSS/Editor/LeftBar.css'
import uuid from 'react-uuid';
import {Container} from './EditBox';
import {Header, Text} from '../Util/editorComponents'
import { autocompleteClasses } from '@mui/material';

const onDragStart = (event, description, style) => {
    console.log('dragstart:', description);
    event.dataTransfer.setData("desc", description);
    event.dataTransfer.setData("id", uuid());
    event.dataTransfer.setData("Style", style);
}

export default function LeftBar(){

    return(
        <div className='editor_left'>
            <DragTexts/>
            <div id='flex' 
                className='flexy' 
                draggable={true} 
                onDragStart={(e) => onDragStart(e, "container")}
            >FlexBox</div>
            <div></div>
            <div></div>
        </div>
    )
}


function DragTexts(props){

    return (
        <div>
            <div className='textContainer' draggable={true} onDragStart={(e) => onDragStart(e, "header",  {marginLeft: "45%"})} ><h1>Header</h1></div>
            <div className='textContainer'draggable={true} onDragStart={(e) => onDragStart(e, "text")}>Text</div>
        </div>
       
    );
}

