import React from 'react';
import styles from './PizzaButton.css';

const PizzaButton = ({ id, sabor, descricao, valor, onClick }) => {
    return (
        <button onClick={() => onClick(id)} className="pizza-button">
            <h3>{sabor}</h3>
            <p>{descricao}</p>
            <p>Valor: R$ {valor.toFixed(2)}</p>
        </button>
    );
};

export default PizzaButton;