import React, {useState} from 'react';
import { Auth,} from 'aws-amplify';
import '../../CSS/Signup/Authenticator.css';

import {onChange} from "./AuthUtil"

export default function Verify(){
    const [userCode, setUserCode] = useState("")
    const usernameText = Auth.currentCredentials
    
    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(Auth.user, userCode);
        } 
        catch (err) { 
            if(err.name === "ExpiredCodeException"){
                await Auth.resendSignUp(usernameText)
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

