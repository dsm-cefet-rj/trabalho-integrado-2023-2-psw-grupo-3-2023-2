import React, { useState } from 'react';
import './tamanhos.css';
import CustomButton from '../CustomButton/CustomButton';

function TamanhoPizza() {
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);

  const handleTamanhoClick = (tamanho) => {
    setTamanhoSelecionado(tamanho);
  };

  return (
    <div className="page-container">
      <h2 className="sabores_title">Selecione o Tamanho da Pizza:</h2>
      <ul className='list-sizes'>
        <li>
          <button onClick={() => handleTamanhoClick('30cm')} className='sizeButton'>30cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('35cm')} className='sizeButton'>35cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('40cm')} className='sizeButton'>40cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('70cm')} className='sizeButton'>70cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('90cm')} className='sizeButton'>90cm</button>
        </li>
      </ul>

      {/* Exibir o tamanho selecionado */}
      {tamanhoSelecionado && (
        <p>Tamanho selecionado: {tamanhoSelecionado}</p>
      )}

      <div className="button-container">
        <CustomButton to="/sabores">Ir para Sabores de Pizza</CustomButton>
      </div>
    </div>
  );
}

export default TamanhoPizza;
