import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from './components/pages/MainPage';
import Basket from './components/pages/Basket';
import './scss/app.scss';

const App = () => {
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/db.json')
          .then((res) => res.json())
          .then((json) => setPizzaList(json.pizzas))
          .catch((err) => {
            console.warn(err)
            alert('Something went wrong')
          })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage pizzas={pizzaList}/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
