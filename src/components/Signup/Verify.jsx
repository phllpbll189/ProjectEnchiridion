import React, {useState} from 'react';
import { Amplify, Auth, verifyCurrentUserAttribute} from 'aws-amplify';
import {userAuth} from '../Signup/AuthUtil';
import '../../CSS/Signup/Authenticator.css';

import {signIn, signOut, signUp, onChange} from "./AuthUtil"

export default function Verify(){
    const [userCode, setUserCode] = useState("")

    const usernameText = Auth.currentCredentials
    

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(Auth.user, userCode);

        } catch (err) { 
          if(err.name == "ExpiredCodeException"){
            Auth.resendSignUp(usernameText)
          }
         }
      }

    return(
        <>
          <div className='style-wrapper'>     
            <div className={"code_submit "}>
              <h1 className="prompt">Verification Code</h1>

              <input 
                className="text_input" 
                onChange={(e) => onChange(e, setUserCode)}
              ></input>

              <button
                onClick={confirmSignUp}
              >submit</button>
              </div>
          </div>
        </>
    )
}

