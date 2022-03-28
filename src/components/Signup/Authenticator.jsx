import React, {useState} from 'react';
import { Amplify, Auth, verifyCurrentUserAttribute} from 'aws-amplify';
import {userAuth} from '../Homepage/UserButton';
import '../../CSS/Signup/Authenticator.css';


// sign up auth
async function signUp(username, password, email, callback) {
  try {
    const { user } = await Auth.signUp({                 
      username,
      password,
      attributes: {
        email,
      }
    })
    callback(true)
    console.log(user)

  } catch (error) {
    console.log("error signing up: ", error);
    console.log("type:", typeof error)
  }
}

// confirm signup 
async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
      console.log('error confirming sign up', error);
  }
}

// sign user in
async function signIn(username, password, setRequireCode) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
    if (error.message === "User is not confirmed."){
      setRequireCode(true);
    }
  }
}

// sign user out
async function signOut() {
  try {
    const user = await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

export default function Authenticator(props){
    const [signed, setSigned] = useState("loading")

    //callback for userAuth
    function translateSign(b, _){
      if(b){
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
            return(
             <Form/>
            );
          // return authenticator here
          // authenticator will change signed
      }   
}


function Form() {
  const [login, setLogIn] = useState(true)
  const [usernameText, setUsernameText] = useState();
  const [emailText, setEmailText] = useState();
  const [passwordText, setPasswordText] = useState();
  const [confirmPassText, setConfirmPassText] = useState();
  const [userCode, setUserCode] = useState();
  const [requireCode, setRequireCode] = useState(false);
  const [requestCode, setRequestCode] = useState(false);

  const getName = (status) => {
    if (status) { return "activeButton" }
    return "inactiveButton";
  }

  //switches between login and signup.
  //makes sure you don't reload the form if you click an active button.
  const switchMode = (status) => {
    if (status) { 
      flipState();
    }
  }

  const flipState = () => {
    setLogIn(!login);
  }

  // gets if form is on login or signup
  const submitForm = (event) => {
    event.preventDefault();

    if (login) {
      // submit for login page
      signIn(usernameText, passwordText, setRequireCode);
    } else {
      // submit for signup page
      signUp(usernameText, passwordText, emailText, setRequireCode);
    }
  }

  // get what text to put in submit button

  // check if email submission should be active
  const getActive = () => {
    if (login) {
      return ("inactive");
    } else {
      return("active");
    }
  }

  const getCodeActive = () => {
    if (requireCode) {
      return "active";
    } else {
      return "inactive";
    }
  }

  // ---- helper functions to update states ----//

  // on text entered in to username field

  const onChange = (event, setter) => {
    event.preventDefault();
    setter(event.target.value)
  }
  // switch between tabs
  function Switch() {
    return (

        <div className="tabs">
          <div className={"formButtons " + getName(login)} onClick={() => switchMode(!login)}>Login</div>
          <div className={"formButtons " + getName(!login)} onClick={() => switchMode(login)}>Sign Up</div>
        </div>

    ) 
  }
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(usernameText, userCode);
      setRequireCode(false);
    } catch (err) { 
      if(err.name == "ExpiredCodeException"){
        verifyCurrentUserAttribute()
      }
     }
  }

  // html for where user enteres verification code
  function GetCode() {
    return (
      <div className={"code_submit " + getCodeActive()}>
        <h1 className="prompt">Verification Code</h1>

        <input 
          className="text_input" 
          onChange={(e) => onChange(e, setUserCode)}
        ></input>

        <button
          onClick={confirmSignUp}
        >submit</button>
      </div>
    )
  }

  //this was taken from the docs here
  //https://docs.amplify.aws/guides/authentication/custom-auth-flow/q/platform/js/#implementation-of-a-custom-authentication-flow
  
  //if verification needed, then verify
  if(requireCode){
    return(
      <>
      <div className={
          "main-container "
        }>

        <div className='style-wrapper'>     
          <div className={"code_submit " + getCodeActive()}>
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
      </div>
      </>
    )
  }
  
  else{
    return (
      <>
        <div className={
            "main-container "
          }>
  
          <div className='style-wrapper'>     
            <Switch/>
  
            <div className="inputs">
              
              <div className={"form_element " + getActive()}>
                <h1 className="prompt">Email</h1>
                <input className="text_input" onChange={(e) => onChange(e, setEmailText)}></input>
              </div>
  
              <div className="form_element">
                <h1 className="prompt">Username</h1>
                <input className="text_input" onChange={(e) => onChange(e, setUsernameText)}></input>
              </div>
              
              <div className="form_element">
                <h1 className="prompt">Password</h1>
                <input className="text_input" onChange={(e) => onChange(e, setPasswordText)}></input>
              </div>
  
              <div className={"form_element " + getActive()}>
                <h1 className="prompt">Confirm Password</h1>
                <input className="text_input" onChange={(e) => onChange(e, setConfirmPassText)}></input>
              </div>
  
              <div className="formButtons" onClick={submitForm}>
                {getActive() === "inactive" ? "login" : "signup"}
              </div>
            </div>
            <div className={"code_submit " + getCodeActive()}>
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
        </div>
      </>  
    );
  }
  
  
}