import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage, Editor, SignUp} from './routes';


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


