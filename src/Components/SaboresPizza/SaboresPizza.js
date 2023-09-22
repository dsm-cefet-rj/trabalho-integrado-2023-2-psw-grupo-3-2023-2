import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sabores.css';
import { saboresData } from '../../data/PizzasData';
import PizzaButton from '../PizzaButton/PizzaButton';
import CustomButton from '../CustomButton/CustomButton';

function SaboresPizza() {
  const handleClickPizza = (id) => {
    console.log('ID: ', id);
  };

  return (
    <div className="page-container">
      <h2 className="sabores_title">Selecione o sabor da Pizza:</h2>
      <div>
        {saboresData.map((e) => {
          return (
            <PizzaButton
              key={e.id}
              id={e.id}
              sabor={e.sabor}
              descricao={e.descrição}
              valor={e.preço}
              onClick={handleClickPizza}
            />
          );
        })}
      </div>

      <div className="button-container">
        <CustomButton to="/tamanhos">Ir para Tamanhos de Pizza</CustomButton>
        <CustomButton to="/" className="button">Confirmar</CustomButton>
      </div>
    </div>
  );
}

export default SaboresPizza;
