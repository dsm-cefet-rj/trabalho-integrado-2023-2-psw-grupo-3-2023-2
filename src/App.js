import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import TamanhoPizza from './Components/TamanhoPizza/TamanhoPizza';
import SaboresPizza from './Components/SaboresPizza/SaboresPizza';
import SaboresDocesPizza from './Components/SaboresPizza/SaboresDocesPizza'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PizzaButton from './Components/PizzaButton/PizzaButton';
import BaseLayout from './Layout/BaseLayout/BaseLayout'
import Carrinho  from './pages/carrinho/Carrinho';
import Ingredientes from './pages/ingredientes/Ingredientes'
import IngredientesDocesPizza from './pages/ingredientes/IngredientesDoces'
import Home from './pages/home/Home';
import PizzasData from './data/PizzasData'
import Footer from './Components/Footer/footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagamento from './pages/Pagamento/Pagamento';
import TelaVazia from './pages/TelaVazia/TelaVazia'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tamanhos" element={<TamanhoPizza />} />
        <Route path="/sabores" element={<SaboresPizza />} />
        <Route path="/saboresdoces" element={<SaboresDocesPizza />} />
        <Route path="/ingredientes" element={<Ingredientes />} />
        <Route path="/ingredientesdoces" element={<IngredientesDocesPizza />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/pagamento" element={<Pagamento/>}/>
        <Route path="/tela-vazia" element={<TelaVazia />} />
        <Route path="*" element={<Navigate to="/pagamento" />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer limit={1}  />
    </Router>
  );
}

export default App;
