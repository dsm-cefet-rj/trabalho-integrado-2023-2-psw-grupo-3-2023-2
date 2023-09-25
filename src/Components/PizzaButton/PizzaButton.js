import React from 'react';
import './PizzaButton.css';

const PizzaButton = ({ id, sabor, descricao, valor, onClick, selected }) => {
  // Adicione a classe "selected" se o sabor estiver selecionado
  const buttonClassName = `pizza-button ${selected ? 'selected' : ''}`;

  return (
    <button onClick={() => onClick({ id, sabor, descricao, valor })} className={buttonClassName}>
      <h3>{sabor}</h3>
      <p>{descricao}</p>
      {valor && <p>Valor: R$ {valor.toFixed(2)}</p>}
    </button>
  );
};

export default PizzaButton;
