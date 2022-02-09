import * as React from 'react';
import '../../CSS/Homepage/TopBar.css'
import { useNavigate } from "react-router-dom";
import UserButton from './UserButton';
// Need to make this a class that will recieve props.
//we will store the right and middle elements in state
// then we will generate the bar based on what was given
export default function TopBar(props){
    //need to make a function to change the state so we can have control of what 

 
    return (
        /* 
        This returns the tap nav bar
        */
        <div className="TopBar">

            <div className='leftContainer start'>
                {/*Grouping things in left container*/}
                <div className="SvgBackground"></div>
                <RedirectToHome></RedirectToHome>
            </div>
            <div className='middle'>
                {props.children}  
            </div>
            <div className='right'>
               <UserButton></UserButton>
            </div>
            
        </div>
    );
}

//might be worth puthing this into its own file and finding a way to reusing the code.
function RedirectToHome() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/")
    }

    console.log("in Redirect")
    return (
        <div className='TopTitleContainer' onClick={handleClick}>
            <div className="TopTitle" >
                Project 
                <div>Enchiridion</div>
            </div>          
        </div>
    );
  }

