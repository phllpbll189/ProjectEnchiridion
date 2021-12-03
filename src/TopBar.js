import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import './CSS/TopBar.css'
import SearchBar from './SearchBar';
import ButtonGroup from './ButtonGroup'


function TopBar(){
    return (
        /* 
        This returns the tap nav bar
        It will have a button that is the class of SvgBackground that is the menu button
        then it will have a Title which is the project enchiridion logo
        */
        <div className="TopBar">
            <button className="SvgBackground"></button>
            <div className="TopTitle">
                Project 
                <span className="table">Enchiridion</span>
            </div>
            <SearchBar className="search"/>
            <ButtonGroup />
        </div>
    );
}

export default TopBar;