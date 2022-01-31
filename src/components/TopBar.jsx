import * as React from 'react';
import '../CSS/TopBar.css'
import SearchBar from './SearchBar';
import ButtonGroup from './ButtonGroup'


function TopBar(){
    return (
        /* 
        This returns the tap nav bar
        It has a menu button
        a Title
        a search bar
        and a login/signup button
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
