import React, {useState} from 'react';
import { Amplify, Auth, verifyCurrentUserAttribute} from 'aws-amplify';
import {userAuth} from '../Signup/AuthUtil';
import '../../CSS/Signup/Authenticator.css';
import {translateSign, onChange, LOADING, SIGNED} from "./AuthUtil";
import Verify from './Verify';
import Form from './Form';

export default function Authenticator(props){
    const [signed, setSigned] = useState("loading")
    const [codeRequired, setCodeRequired] = useState(false)

    userAuth((signedIn, result) => translateSign(signedIn, result, setSigned))

    switch(signed) {
      case LOADING: // return words loading
        return(<div>{signed}</div>)

      case SIGNED: // return whatever was protected by authentication
        return(props.children)

      default: //return Signin form for the user
        if(codeRequired)
          return <Verify/> //make sure it has callback to go to verify
        else
          return <Form codeRequired={setCodeRequired}/>
    }   
}

