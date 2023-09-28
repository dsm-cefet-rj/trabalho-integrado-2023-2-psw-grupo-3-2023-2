import React from 'react';
import './IngredientButton.css';

const IngredientButton = ({ id, ingrediente, valor, onClick, selected }) => {
  const buttonClassName = `ingredient-button ${selected ? 'selected' : ''}`;

  return (
    <button onClick={() => onClick({ id, ingrediente })} className={buttonClassName}>
      <h3>{ingrediente}</h3>
      <p>Preço: R$ {valor.toFixed(2)}</p> {/* Certifique-se de passar o valor corretamente */}
    </button>
  );
};

export default IngredientButton;
