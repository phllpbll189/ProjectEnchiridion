import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './routes/HomePage';
import SignUp from './routes/SignUp';
import './CSS/Homepage/HomePage.css';

//this is what is called to render the react element initially.
ReactDOM.render(
  // #TODO Need to make top bar show up here, there isn't a scenario that doesn't have a nav bar
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
