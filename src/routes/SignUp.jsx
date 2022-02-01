import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../CSS/Signup/SignUp.css';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
//this is what is called to render the react element initially.
function SignUp(){
    return (
       <div className='center'>
            <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <p>
                        welcome to my channel, with auth!
                    </p>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}      
            </Authenticator>  
        </div>
        
      );
}

export default SignUp;

