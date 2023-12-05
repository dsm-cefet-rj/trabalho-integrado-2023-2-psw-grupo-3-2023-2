import React from "react";

const Confirmacao = ({ onClick }) => {
    const handleVoltar = () => {
      onClick();
    };
  
    return (
      <div className="selected-endereco">
        <div className="endereco-header">
          <p className="endereco-descricao">Confirmação de Pagamento</p>
          <span className="close-button" onClick={handleVoltar}>
            &#x2715;
          </span>
        </div>
        <p className="endereco-texto">Você confirma a forma de pagamento selecionada?</p>
        <button className="confirm-button" onClick={handleVoltar}>
          Confirmar
        </button>
      </div>
    );
  };

  export default Confirmacao; 