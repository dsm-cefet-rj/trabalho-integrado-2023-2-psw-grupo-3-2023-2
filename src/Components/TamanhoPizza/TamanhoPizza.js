import React from 'react';
import './tamanhos.css';
import CustomButton from '../CustomButton/CustomButton';
import useStore from '../Store/Store';

function TamanhoPizza() {
  const tamanhoSelecionado = useStore((state) => state.tamanhoSelecionado);
  const setSelectedTamanho = useStore((state) => state.setSelectedTamanho);

  const handleTamanhoClick = (tamanho) => {
    setSelectedTamanho(tamanho);
  };

  return (
    <div className="page-container">
      <h2 className="sabores_title">Selecione o Tamanho da Pizza:</h2>
      <ul className='list-sizes sabores-grid'>
        <li>
          <button onClick={() => handleTamanhoClick('30cm')} className={`sizeButton ${tamanhoSelecionado === '30cm' ? 'selected' : ''}`}>30cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('35cm')} className={`sizeButton ${tamanhoSelecionado === '35cm' ? 'selected' : ''}`}>35cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('40cm')} className={`sizeButton ${tamanhoSelecionado === '40cm' ? 'selected' : ''}`}>40cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('70cm')} className={`sizeButton ${tamanhoSelecionado === '70cm' ? 'selected' : ''}`}>70cm</button>
        </li>
        <li>
          <button onClick={() => handleTamanhoClick('90cm')} className={`sizeButton ${tamanhoSelecionado === '90cm' ? 'selected' : ''}`}>90cm</button>
        </li>
      </ul>

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
