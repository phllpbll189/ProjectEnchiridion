import React, {useState} from 'react';
import { Amplify, Auth } from 'aws-amplify';
import {userAuth} from '../Homepage/UserButton';


export default function Authenticator(props){
    const [signed, setSigned] = useState("loading")

    function translateSign(bool, _){
        if(bool){
            setSigned("signed");
        } else {
            setSigned("unsigned");
        }
    }

    userAuth(translateSign);

    switch(signed) {
        case "loading":
          // return words loading
          return(<div>{signed}</div>);
        case "signed":
          // return profile of the user here
          return(props.children);
        default:
            return(<>signup</>);
          // return authenticator here
          // authenticator will change signed

      }   
}