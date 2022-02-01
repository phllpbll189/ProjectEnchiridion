import * as React from 'react';
import '../../CSS/Homepage/TopBar.css'
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

            <div className='leftContainer start'>
                {/*Grouping things in left Container to
                 allow us to use full power of flex box*/}
                <button className="SvgBackground"></button>
                <div className="TopTitle">
                    Project 
                    <div>Enchiridion</div>
                </div>

            </div>

            <SearchBar className="search"/> 

            {/*had to put buttonGroup in a div to be able to give it a class name*/}
            <div className='end'><ButtonGroup/></div>   
        </div>
    );
}

export default TopBar;
