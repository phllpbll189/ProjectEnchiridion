import React from 'react';
import TopBar from '../components/Homepage/TopBar';
import LeftBar from '../components/Editor/LeftBar';
import EditBox from '../components/Editor/EditBox';
import '../CSS/Editor/Editor.css';

export default function Editor(){
    const sideStyle = {
        background: "#999999",
        paddingLeft: "5px",
    }
    // going to need to save the divs as arrays within arrays. each of which will have a short description that can be used to generate react code.
    // TypeScript will be usefule to make our own classes and inheriting a common function to create jsx. <div className={} id={} draggable="true" onDragStart={} onDrop={} onDragOver={event.preventDefault()} onDragEnd={}>
    return(
        <>
            <TopBar/>
            <div className='column_container'>
                <LeftBar></LeftBar>
                <EditBox></EditBox>
            </div>
        </>
    );
}