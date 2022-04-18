import React, {useState} from 'react';
import {signIn, signOut, signUp, onChange, SwitchActiveState, getButtonName} from "./AuthUtil";

export default function Form(props) {
    const [login, setLogIn] = useState(true)
    const [usernameText, setUsernameText] = useState()
    const [emailText, setEmailText] = useState()
    const [passwordText, setPasswordText] = useState()
    const [confirmPassText, setConfirmPassText] = useState()
  
    return (
      <div className="main-container">
        <form className='style-wrapper'>     
          <Switch/>
  
          <div className="inputs">
  
                <FormElement setter={setEmailText} SwitchState={SwitchActiveState}> Email </FormElement>
                <FormElement setter={setUsernameText}> Username </FormElement>
                <FormElement setter={setPasswordText}> Password </FormElement>
                <FormElement setter={setConfirmPassText} SwitchState={SwitchActiveState}> Confirm Password </FormElement>
    
                <div className="formButtons" onClick={submitForm}>
                    {SwitchActiveState() === "inactive" ? "login" : "signup"}
                </div>
  
          </div>
        </form>
      </div>  
    );
 

    function submitForm(event) {
        event.preventDefault()
    
        if (login) {
            signIn(usernameText, passwordText, props.codeRequired);
    
        } else if(!login && passwordText == confirmPassText) {
            signUp(usernameText, passwordText, emailText, props.codeRequired)
   
        } else {
            console.log("Passwords don't match.")
        }
    }
    
    // switch between login and signup tabs
    function Switch() {
        return (
            <div className="tabs">
                <div className={"formButtons " + getButtonName(login)} onClick={() => switchMode(!login)}>Login</div>
                <div className={"formButtons " + getButtonName(!login)} onClick={() => switchMode(login)}>Sign Up</div>
            </div>
        ) 
    }

    function switchMode(status) {
        if (status) { 
          setLogIn(!login)
        }
    }
        
}
  
function FormElement(props) {
    return ( 
        <div className={"form_element " + (props.SwitchState ? props.SwitchState() : "")}>
            <h1 className="prompt">{props.children}</h1>
            <input className="text_input" onChange={(e) => onChange(e, props.setter)}></input>
        </div>
    )
}