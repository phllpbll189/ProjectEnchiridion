import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import TopBar from '../components/Homepage/TopBar';
import Profile from '../components/Signup/Profile';
import Authenticator from '../components/Signup/Authenticator';


import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';

//this is what is called to render the react element initially.
function SignUp(){
    const style = {
        "color": '#ffffff',
        "font-size": "21px"
    }

    
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

