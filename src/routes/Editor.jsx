import React from 'react';
import TopBar from '../components/Homepage/TopBar';
import ComponentBar from '../components/Editor/ComponentBar.jsx';
import '../CSS/Editor/Editor.css';


export default function Editor(){
    // TODO make constructor and store props from state that is passed down
    return(
        <>
            <TopBar/>
            <div className='column_container'>
                <div className='editor_left' style={{background: "#000000"}}>hello</div>
                <div className='main_divider'  style={{background: "#ffffff"}}>world</div>
            </div>
        </>
    );
}