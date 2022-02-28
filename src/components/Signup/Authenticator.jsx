import React, {useState} from 'react';
import { Amplify, Auth } from 'aws-amplify';
import {userAuth} from '../Homepage/UserButton';
import '../../CSS/Signup/Authenticator.css';

// graphql imports

import { API } from 'aws-amplify'
import { createTodo, listTodos, updateTodo, deleteTodo } from './graphql/todo'


// sign up auth
async function signUp(username, password, email) {
  try {
    const { user } = await Auth.signUp({                 
      username,
      password,
      attributes: {
        email,
      }
    });
    console.log(user)
  } catch (error) {
    console.log("error signing up: ", error);
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
async function signIn(username, password) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
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

  const getName = (status) => {
    if (status) { return "active" }
    return "inactive";
  }

  const getFunc = (status) => {
    if (status) { 
      flipState();

    }
  }

  const flipState = () => {
    setLogIn(!login);
  }

  const getContext = () => {
    if (login) {
      return ("login_button");
    } else {
      return ("signup_button");
    }
  }

  // gets if form is on login or signup
  const submitForm = (event) => {
    event.preventDefault();
    setRequireCode(true);

    if (getContext() === "login_button") {
      // submit for login page
      signIn(usernameText, passwordText);
    } else {
      // submit for signup page
      signUp(usernameText, passwordText, emailText);
      //confirmSignUp(usernameText, )
    }
  }

  // get what text to put in submit button
  const getSubmitText = () => {
    if (getContext() === "login_button") {
      return ("Login");
    } else {
      return("Signup");
    }
  }

  // check if email submission should be active
  const getActive = () => {
    if (getContext() === "login_button") {
      return ("attributes_inactive");
    } else {
      return("attributes_active");
    }
  }

  const switchActive = () => {
    if (requireCode) {
      return "form_submit_inactive";
    } else
    return "form_submit_active";
  }

  const makeCodeActive = () => {
    if (requireCode) {
      return "code_submit_active";
    } else {
      return "code_submit_inactive";
    }
  }

  // ---- helper functions to update states ----//

  // on text entered in to username field
  const onUserChange = (event) => {
    setUsernameText(event.target.value)
    console.log(usernameText)
  }

  // on text entered into email field
  const onEmailChanged = (event) => {
    setEmailText(event.target.value)
    console.log(emailText)
  }

  // on text entered into password field
  const onPassChanged = (event) => {
    setPasswordText(event.target.value)
    console.log(passwordText)
  }

  // on password text entered
  const onConfirmPassChanged = (event) => {
    setConfirmPassText(event.target.value)
    console.log(confirmPassText)
  }

  // on verification code changed
  const onCodeChanged = (event) => {
    setUserCode(event.target.value)
    console.log(userCode)
  }

  // switch between tabs
  function Switch() {
    return (
      <div className="form">
        <div className="tabs">
          <div className={getName(login)} onClick={() => getFunc(!login)}>Sign In</div>
          <div className={getName(!login)} onClick={() => getFunc(login)}>Sign Up</div>
        </div>
      </div>
      
    ) 
  }

  // html for where user enteres verification code
  function GetCode() {
    return (
      <div className={makeCodeActive()}>
        <h1 className="prompt">Verification Code</h1>
        <input className="text_input" onChange={(e) => onCodeChanged(e)}></input>
      </div>
    )
  }

  //------ Graphql Tinker -------//
  


  // query button
  function QueryButton() {
    return (
      <div onClick={queryName} >Query Me</div>
    )
  }

  function CreateName() {
    return (
      <div onClick={createName} >Create Me</div>
    )
  }

  // create todo item
  async function createName() {
    try {
      const result = await API.graphql(createTodo, {
        input: {
          name: 'My first todo!'
        }
      })
    } catch(err) {
      console.log("Error creating data")
    }
  }

  // query todo item
  async function queryName() {
    try {
      const result = await API.graphql(listTodos)
      console.log(result)
    } catch(err) {
      console.log("Error retrieving data")
    }
  }

  return (
    <>
      <span className={switchActive()}>
        <Switch/>
        <div className="inputs">
          <div className={getActive()}>
            <h1 className="prompt">Email</h1>
            <input className="text_input" onChange={(e) => onEmailChanged(e)}></input>
          </div>

          <div className="form_element">
            <h1 className="prompt">Username</h1>
            <input className="text_input" onChange={(e) => onUserChange(e)}></input>
          </div>
          
          <div className="form_element">
            <h1 className="prompt">Password</h1>
            <input className="text_input" onChange={(e) => onPassChanged(e)}></input>
          </div>

          <div className={getActive()}>
            <h1 className="prompt">Confirm Password</h1>
            <input className="text_input" onChange={(e) => onConfirmPassChanged(e)}></input>
          </div>

          <div className="submit_button" onClick={submitForm}>{getSubmitText()}</div>
        </div>
      </span>
      <CreateName/>
      <QueryButton/>
      <GetCode/>
    </>  
  );
}