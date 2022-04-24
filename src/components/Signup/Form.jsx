import React, {useState} from 'react';
import {signIn, signOut, signUp, onChange, SwitchActiveState, getButtonName, resendConfirmationCode} from "./AuthUtil";

export default function Form(props) {
    const [login, setLogIn] = useState(true)
    const [usernameText, setUsernameText] = useState()
    const [emailText, setEmailText] = useState()
    const [passwordText, setPasswordText] = useState()
    const [confirmPassText, setConfirmPassText] = useState()
    const [submitButtonClicked, setMouseButtonClicked] = useState(false)
  
    return (
      <div className="main-container">
        <form className='style-wrapper'>     
          <Switch/>
  
          <div className="inputs">
  
                <FormElement setter={setEmailText} SwitchActiveState={SwitchActiveState} status={login}> Email </FormElement>
                <FormElement setter={setUsernameText}> Username </FormElement>
                <FormElement setter={setPasswordText}> Password </FormElement>
                <FormElement setter={setConfirmPassText} SwitchActiveState={SwitchActiveState} status={login}> Confirm Password </FormElement>
    
                <div className={"formButtons unselectable " + (submitButtonClicked ? "clickedButton" : "")}
                    onClick={submitForm}
                    onMouseDown={() => setMouseButtonClicked(true)}
                    onMouseUp={() => setMouseButtonClicked(false)}>
                    {SwitchActiveState(login) === "inactive" ? "login" : "signup"}
                </div>
  
          </div>
        </form>
      </div>  
    );
 

    async function submitForm(event) {
        event.preventDefault()
    
        if (login) {
            await signIn(usernameText, passwordText, props.codeRequired);
            props.setUsernameText(usernameText)

        } else if(!login && passwordText === confirmPassText) {
            await signUp(usernameText, passwordText, emailText, props.codeRequired)
            props.setUsernameText(usernameText)

        } else {
            console.log("Passwords don't match.")
        }
    }
    
    // switch between login and signup tabs
    function Switch() {
        return (
            <div className="tabs">
                <div className={"formButtons unselectable " + getButtonName(login)} onClick={() => switchMode(!login)}>Login</div>
                <div className={"formButtons unselectable " + getButtonName(!login)} onClick={() => switchMode(login)}>Sign Up</div>
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
        <div className={"form_element " + (props.SwitchActiveState ? props.SwitchActiveState(props.status) : "")}>
            <h1 className="prompt">{props.children}</h1>
            <input className="text_input" onChange={(e) => onChange(e, props.setter)}></input>
        </div>
    )
}