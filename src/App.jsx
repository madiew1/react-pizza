import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from './components/pages/MainPage';
import Basket from './components/pages/Basket';
import './scss/app.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
