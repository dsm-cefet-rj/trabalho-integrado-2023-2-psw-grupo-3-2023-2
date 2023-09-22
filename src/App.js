import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import TamanhoPizza from './Components/TamanhoPizza/TamanhoPizza';
import SaboresPizza from './Components/SaboresPizza/SaboresPizza';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PizzaButton from './Components/PizzaButton/PizzaButton';
import BaseLayout from './Layout/BaseLayout/BaseLayout'
import { Carrinho } from './pages/carrinho/Carrinho';
import PizzasData from './data/PizzasData'



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
            <Route path="/tamanhos" element={<TamanhoPizza />}/>
            <Route path="/sabores" element={<SaboresPizza/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="carrinho" element={<Carrinho/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
