import React from 'react';
import './IngredientButton.css';

const IngredientButton = ({ id, ingrediente, valor, onClick, selected }) => {
  const buttonClassName = `ingredient-button ${selected ? 'selected' : ''}`;

  return (
    <button onClick={() => onClick({ id, ingrediente, valor })} className={buttonClassName}>
      <h3>{ingrediente}</h3>
      {valor && <p>Valor: R$ {Number(valor).toFixed(2)}</p>}
    </button>
  );
};

export default IngredientButton;