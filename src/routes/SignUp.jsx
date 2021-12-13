import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../CSS/SignUp.css'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../aws-exports';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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

