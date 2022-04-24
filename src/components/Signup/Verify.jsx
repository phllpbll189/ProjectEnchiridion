import React, {useState} from 'react';
import { Auth,} from 'aws-amplify';
import '../../CSS/Signup/Authenticator.css';
import { useNavigate } from "react-router-dom";
import {onChange} from "./AuthUtil"


export default function Verify(props){
    const [userCode, setUserCode] = useState("")
    const navigate = useNavigate()

    async function confirmSignUp() {
        try {
            await Auth.confirmSignUp(props.username, userCode);
            props.codeRequired(false)
            navigate('/')
        } 
        catch (err) { 
            if(err.name === "ExpiredCodeException"){
                await Auth.resendSignUp(props.username)
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

