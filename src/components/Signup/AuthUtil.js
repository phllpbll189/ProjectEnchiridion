import { Amplify, Auth, verifyCurrentUserAttribute} from 'aws-amplify';

const LOADING = "loading"
const SIGNED = "signed"
const UNSIGNED = "unsigned"

function translateSign(signedIn, result, setSigned, setCodeRequired){
    if(signedIn){
        setSigned(SIGNED);                          
    } else if(result === "the user is not authenticated") {
        setCodeRequired(true)
    } else {
        setSigned(UNSIGNED);
    } 
}

// sign up auth
async function signUp(username, password, email, setRequireCode) {
    try {
      const { user } = await Auth.signUp({                 
        username,
        password,
        attributes: {
          email,
        }
      })

      setRequireCode(true)
      console.log(user)
  
    } catch (error) {
      console.log("error signing up: ", error);
    }
}
  
  // sign user in
async function signIn(username, password, setRequireCode) {
    try {
        const user = await Auth.signIn(username, password);
    }   catch (error) {
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

async function userAuth(callback) {
    await Auth.currentAuthenticatedUser({
        /*
            FIX ME!

            bypassCache needs to be set to false when testing is finished.
        */
        bypassCache: false
    }).then(user => {
        callback(true, user);
    }).catch(err => {
        callback(false, err);
    });
}

// to change text fields
function onChange(event, setter) {
    event.preventDefault();
    setter(event.target.value)
}

// switch state between login and signup
function SwitchActiveState(status) {
    if (status) {
        return ("inactive")
    } else {
        return("active")
    }
}

//allows for fine tuned control of buttons
function getButtonName(status){
    if(status) return "activeButton"

    return "inactiveButton"
}
  
export {signIn, signOut, signUp, userAuth, translateSign,
     onChange, SIGNED, LOADING, SwitchActiveState, getButtonName}  
