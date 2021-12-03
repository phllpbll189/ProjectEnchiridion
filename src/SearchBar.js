import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from "@mui/icons-material/Home";
import './CSS/SearchBar.css';
import {ReactComponent as Arrow} from './CSS/IMAGES/Arrow.svg';

function SearchBar(){
    return(
        <div className="container">
             <button className="dropdown">
                 <Arrow />
             </button>
             <input type="text" placeholder="Search Guides" className="Search"></input>
        </div>
    );
}

export default SearchBar;