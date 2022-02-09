import React, {useState, useEffect} from 'react';
import TopBar from '../components/Homepage/TopBar';
import '../CSS/Homepage/HomePage.css';
import SearchBar from '../components/Homepage/SearchBar';



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
      </>
  );
    
}


export default HomePage;