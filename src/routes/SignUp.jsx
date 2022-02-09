import React, { useEffect } from 'react';
import Amplify from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';
import awsconfig from '../aws-exports';
import TopBar from '../components/Homepage/TopBar';
import Profile from '../components/Signup/Profile'

Amplify.configure(awsconfig);
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
                {({ signOut, user }) => { //anon function

                    return (
                        <Profile></Profile>
                    );
                }}      
                </Authenticator>  
    
        </>
    );  
}

export default SignUp;

