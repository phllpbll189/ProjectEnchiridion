import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import './CSS/TopBar.css'
import SearchBar from './SearchBar';
import ButtonGroup from './ButtonGroup'


function TopBar(){
    return (
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