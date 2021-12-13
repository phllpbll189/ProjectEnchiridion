import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import React from 'react';
import ReactDOM from 'react-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//this is what is called to render the react element initially.
function SignUp(){
    return (
        <AmplifySignOut />
    );
}

export default withAuthenticator(SignIn);
