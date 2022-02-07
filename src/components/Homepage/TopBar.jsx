import * as React from 'react';
import '../../CSS/Homepage/TopBar.css'
import { useNavigate } from "react-router-dom";
// Need to make this a class that will recieve props.
//we will store the right and middle elements in state
// then we will generate the bar based on what was given
export default class TopBar extends React.Component {
    //need to make a function to change the state so we can have control of what 

    render() {
        const Middle = props => <div className='middle'>{this.props.middleChild}</div>
        const End = props => <div className='right'>{this.props.endChild}</div>
        
        return (
            /* 
            This returns the tap nav bar
            */
            <div className="TopBar">

                <div className='leftContainer start'>
                    {/*Grouping things in left container*/}
                    <div className="SvgBackground"></div>
                    <RedirectToHome>Logo to homepage</RedirectToHome>
                </div>
                <Middle></Middle>
                <End></End> 
            </div>
        );
    }

}

//might be worth puthing this into its own file and finding a way to reusing the code.
function RedirectToHome() {
    let navigate = useNavigate();
    function handleClick() {
      navigate("/")
    }

    console.log("in Redirect in Signup.jsx")
    return (
        <div className='TopTitleContainer' onClick={handleClick}>
            <div className="TopTitle" >
                Project 
                <div>Enchiridion</div>
            </div>          
        </div>
    );
  }

