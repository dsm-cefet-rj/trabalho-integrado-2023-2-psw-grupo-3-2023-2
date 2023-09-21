import React, { useState } from 'react';
import './tamanhos.css'
import { NavLink } from 'react-router-dom/dist';

function TamanhoPizza() {
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

    const handleTamanhoClick = (tamanho) => {
        setTamanhoSelecionado(tamanho);
    };

    return (
        <div className="page-container">
            <h2>Selecione o Tamanho da Pizza:</h2>
            <ul>
                <li>
                    <button onClick={() => handleTamanhoClick('30cm')}>30cm</button>
                </li>
                <li>
                    <button onClick={() => handleTamanhoClick('35cm')}>35cm</button>
                </li>
                <li>
                    <button onClick={() => handleTamanhoClick('40cm')}>40cm</button>
                </li>
                <li>
                    <button onClick={() => handleTamanhoClick('70cm')}>70cm</button>
                </li>
                <li>
                    <button onClick={() => handleTamanhoClick('90cm')}>90cm</button>
                </li>
            </ul>

            <NavLink className="button-container" to="/sabores">Ir para Sabores de Pizza</NavLink>

            {/* Exibir o tamanho selecionado) */}
            {tamanhoSelecionado && (
                <p>Tamanho selecionado: {tamanhoSelecionado}</p>
            )}
        </div>
    );
}

export default TamanhoPizza;

