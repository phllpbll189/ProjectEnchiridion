import React from 'react';
import TopBar from '../components/Homepage/TopBar';
import '../CSS/Homepage/HomePage.css';
import SearchBar from '../components/Homepage/SearchBar';
import Test from '../components/Homepage/Test'



function HomePage(){
//next step for this is to figure out how to see when the user is signed in

  //generate 2 different divs here based on signed in data
    
return (
  /* 
  This returns the tap nav bar
  */
    <>
        <TopBar>
            <SearchBar/>
        </TopBar>
        <Test></Test>
    </>
);
    
}


export default HomePage;