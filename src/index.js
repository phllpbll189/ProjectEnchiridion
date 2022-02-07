import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import SignUp from './routes/SignUp';
import Profile from './Profile';
import './CSS/index.css'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//this is what is called to render the react element initially.
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
