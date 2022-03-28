import * as React from 'react';
import '../../CSS/Homepage/SearchBar.css';
import {ReactComponent as Arrow} from '../../CSS/IMAGES/Arrow.svg';

function SearchBar(){
    return(
        //this is just a search bar with a button next to it
        //for a filter
    
        <div className="container">
             <input type="text" placeholder="Search Guides" className="Search"></input>
        </div>
    );
}

export default SearchBar;
