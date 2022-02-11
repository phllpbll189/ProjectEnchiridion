import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, Editor, SignUp} from './routes';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
//this is what is called to render the react element initially.
ReactDOM.render(
  <AmplifyProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Editor" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </AmplifyProvider>,
  document.getElementById('root')
);

