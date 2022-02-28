import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, Editor, SignUp} from './routes';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';

//import aws_exports from './aws-exports'

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';

// changed to use 'awsconfig' instead of 'aws_exports', what will this change?
Amplify.configure(awsconfig);

//this is what is called to render the react element initially.
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Editor" element={<Editor />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

