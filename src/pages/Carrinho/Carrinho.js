import React from 'react';
import useStore from '../../Components/Store/Store';
import './Carrinho.css';

function Carrinho() {
  const tamanhoSelecionado = useStore((state) => state.tamanhoSelecionado);
  const saborSelecionado = useStore((state) => state.saborSelecionado);
  const saboresData = useStore((state) => state.saboresData);

  if (!saborSelecionado) {
    return (
      <div className="page-container">
        <h1>Carrinho</h1>
        <p>Nenhuma pizza selecionada no carrinho.</p>
      </div>
    );
  }

  const sabor = saboresData.find((sabor) => sabor.id === saborSelecionado.id);

  if (!sabor) {
    return (
      <div className="page-container">
        <h1>Carrinho</h1>
        <p>Sabor selecionado não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1>Carrinho</h1>
      {tamanhoSelecionado && saborSelecionado && sabor ? (
        <div className="pizza-details">
          <h2>Tamanho: {tamanhoSelecionado}</h2>
          <h2>Sabor: {sabor.sabor}</h2>
          <p>Descrição: {sabor.descrição}</p>
          <p>Valor: R$ {sabor.preços[tamanhoSelecionado].toFixed(2)}</p>
        </div>
      ) : (
        <p>Nenhuma pizza selecionada no carrinho.</p>
      )}
    </div>
  );
}

export default Carrinho;
