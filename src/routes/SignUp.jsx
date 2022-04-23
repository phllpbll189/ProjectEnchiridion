import React from 'react';
import TopBar from '../components/Homepage/TopBar';
import Profile from '../components/Signup/Profile';
import Authenticator from '../components/Signup/Authenticator';


import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';

//this is what is called to render the react element initially.
function SignUp(){  
    return (
        <>  
            <TopBar/>
            <Authenticator>
                <Profile/>
            </Authenticator>
        </>
    );  
} 
 
export default SignUp;

