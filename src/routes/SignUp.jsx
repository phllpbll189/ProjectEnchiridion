import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';
import TopBar from '../components/Homepage/TopBar';
import Profile from '../components/Signup/Profile'
import Amplify from 'aws-amplify';
import awsmobile from '../aws-exports'
Amplify.configure(awsmobile);

//this is what is called to render the react element initially.
function SignUp(){
    const style = {
        "color": '#ffffff',
        "font-size": "21px"
    }

    
    return (
        <div>  
            <TopBar/>
            <Authenticator>
                {({ signOut, user }) => (
                    <Profile></Profile>    
                )}
            </Authenticator>  
    
        </div>
    );  
} 

export default SignUp;

