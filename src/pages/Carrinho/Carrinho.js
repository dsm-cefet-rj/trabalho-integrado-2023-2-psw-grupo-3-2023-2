import React from 'react';
import useStore from '../../Components/Store/Store';
import './Carrinho.css';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { NavLink } from 'react-router-dom';


function Carrinho() {
  const tamanhoSelecionado = useStore((state) => state.tamanhoSelecionado);
  const saborSelecionado = useStore((state) => state.saborSelecionado);
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
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

  const precoTotal = useStore.getState().calcularPrecoTotal();
  const precoIngredientes = useStore.getState().calcularPrecoIngredientes();

  return (
    <div className="page-container">
      <h1>Carrinho</h1>
      {tamanhoSelecionado && saborSelecionado && sabor ? (
        <div className="pizza-details">
          <h2>Tamanho: {tamanhoSelecionado}</h2>
          <h2>Sabor: {sabor.sabor}</h2>
          <p>Descrição: {sabor.descrição}</p>
          <p>Valor da Pizza: R$ {precoTotal.toFixed(2)}</p>
          
          {/* Mostra os ingredientes selecionados */}
          <h3>Ingredientes Selecionados:</h3>
          <ul>
            {ingredientesSelecionados.map((ingrediente) => (
              <li key={ingrediente.id}>{ingrediente.nome} - R$ {ingrediente.preco.toFixed(2)}</li>
            ))}
          </ul>
          
          {/* Mostra o valor total dos ingredientes */}
          <p>Valor dos Ingredientes: R$ {precoIngredientes.toFixed(2)}</p>
          
          {/* Mostra o valor total (Pizza + Ingredientes) */}
          <p>Valor Total: R$ {(precoTotal + precoIngredientes).toFixed(2)}</p>
        </div>
      ) : (
        <p>Nenhuma pizza selecionada no carrinho.</p>
      )}
      <div className="button-container">
        <CustomButton to="/Pagamento" className="button">Seguir para o Pagamento</CustomButton>
      </div>
    </div>
  );
}

export default Carrinho;
