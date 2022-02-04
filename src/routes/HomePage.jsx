import React, {useState, useEffect} from 'react';
import TopBar from '../components/Homepage/TopBar';
import '../CSS/Homepage/HomePage.css';
import SearchBar from '../components/Homepage/SearchBar';
import ButtonGroup from '../components/Homepage/ButtonGroup';
import { Authenticator } from '@aws-amplify/ui-react';
import Amplify, { Auth } from 'aws-amplify';
import { useNavigate } from "react-router-dom";

class HomePage extends React.Component{
//next step for this is to figure out how to see when the user is signed in


    render(){
        return (
            /* 
            This returns the tap nav bar
            */
           <div>
              <TopBar
                middleChild={<SearchBar/>}
                endChild={<ButtonGroup/>}
                /> 
           </div>
        );
    }
}

function Redirect() { //handles redirect to SignUp
    let navigate = useNavigate();

    function handleClick() {
      navigate("SignUp")
    }

    return (
      <div>
        <button onClick={handleClick}>Go Signin</button>
      </div>
    );
  }


export default HomePage;