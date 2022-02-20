import React, { useState } from 'react';
import TopBar from '../components/Homepage/TopBar';
import LeftBar from '../components/Editor/LeftBar';
import EditBox from '../components/Editor/EditBox';
import '../CSS/Editor/Editor.css';

export default function Editor(){
    const [dragging, setDragging] = useState(false);

    const flipDragging = () => {
        setDragging(!dragging);
    } //will be used to enable dragging in between elements

    return(
        <>
            <TopBar/>
            <div className='column_container'>
                <LeftBar dragging={flipDragging}></LeftBar>
                <EditBox dragging={flipDragging}></EditBox>
            </div>
        </>
    );
}