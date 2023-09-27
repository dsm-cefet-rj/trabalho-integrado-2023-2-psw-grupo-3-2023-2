import React, { useState } from 'react';
import './Pagamento.css';

const EnderecoSalvo = ({ descricao, endereco, onClick, isSelected }) => {
    const handleOnClick = () => {
      onClick(descricao);
    };
  
    return (
      <div
        className={`endereco-salvo ${isSelected ? 'selected' : ''}`}
        onClick={handleOnClick}
      >
        <p className={`endereco-descricao ${isSelected ? 'selected-text' : ''}`}>
          {descricao}
        </p>
        <p className={`endereco-texto ${isSelected ? 'selected-text' : ''}`}>
          {endereco}
        </p>
      </div>
    );
  };
  
const enderecosSalvos = [
    {
      descricao: 'Casa',
      endereco: 'Rua A, 123 - Bairro ABC - Cidade X - Estado Y - CEP: 12345-678'
    },
    {
      descricao: 'Trabalho',
      endereco: 'Avenida B, 456 - Bairro DEF - Cidade Y - Estado Z - CEP: 98765-432'
    },
    {
      descricao: 'Apartamento',
      endereco: 'Rua C, 789 - Bairro GHI - Cidade Z - Estado W - CEP: 54321-876'
    }
  ];
  


const Pagamento = () => {
  const [showAddressSection, setShowAddressSection] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [paymentOption, setPaymentOption] = useState('- Selecionar -');
  const [selectedEndereco, setSelectedEndereco] = useState(null);
  const [showSelectedEndereco, setShowSelectedEndereco] = useState(false);

  const handleSelectEndereco = (descricao) => {
    setSelectedEndereco(descricao);
    setShowSelectedEndereco(true);
  };

  const handleSelecionar = () => {
    setShowAddressSection(false);
    setShowPaymentSection(true);
  };

  const handleVoltar = () => {
    setShowSelectedEndereco(false);
    setSelectedEndereco(null);
  };

  const handleToggleOptions = () => {
    setShowPaymentSection(!showPaymentSection);
  };

  const handlePaymentOptionSelect = (option) => {
    setPaymentOption(option === '- Selecionar -' ? '- Selecionar -' : option);
    setShowPaymentSection(false);
  };

  const handleVerEnderecos = () => {
    setShowAddressSection(!showAddressSection);
    setShowPaymentSection(false);
    setShowNewAddressForm(false);
    setSelectedEndereco(null);
  };

  const handleAdicionarNovoEndereco = () => {
    setShowNewAddressForm(!showNewAddressForm);
    setShowAddressSection(false);
  };

  const renderEnderecosSalvos = () => {
    return enderecosSalvos.map((endereco, index) => (
      <EnderecoSalvo
        key={index}
        descricao={endereco.descricao}
        endereco={endereco.endereco}
        isSelected={selectedEndereco === endereco.descricao}
        onClick={handleSelectEndereco}
      />
    ));
  };


  const renderSelectedEndereco = () => {
    return (
      <div className="selected-endereco">
        <p className="endereco-descricao">{selectedEndereco}</p>
        <p className="endereco-texto">
          {enderecosSalvos.find((endereco) => endereco.descricao === selectedEndereco).endereco}
        </p>
      </div>
    );
  };

  const renderAddressSection = () => {
    return (
      <div className="address-section">
        <div className="header bold">Endereço</div>
        <div className={`expand-button ${showAddressSection ? 'expanded' : ''}`}>
          <button onClick={handleVerEnderecos}>
            {showAddressSection ? 'Ocultar' : 'Ver Endereços Salvos'}
          </button>
          {showAddressSection && (
            <div className="address-list">
              {renderEnderecosSalvos()}
            </div>
          )}
          {!showSelectedEndereco && (
            <button onClick={handleAdicionarNovoEndereco}>
              Adicionar Novo Endereço
            </button>
          )}
          {showSelectedEndereco && (
            <button onClick={handleVoltar} className="action-button">
              Voltar
            </button>
          )}
          {showSelectedEndereco && (
            <button onClick={handleSelecionar} className="action-button">
              Selecionar
            </button>
          )}
          {showSelectedEndereco && selectedEndereco && renderSelectedEndereco()}
        </div>
      </div>
    );
  
  };

  const renderNewAddressForm = () => {
    return (
        <div className="new-address-form">
        <form>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Estado" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <button type="submit">Adicionar Endereço</button>
        </form>
      </div>
    );
  };

  const paymentOptions = ['Cartão', 'Boleto', 'Pix'];

  const renderPaymentSection = () => {
    return (
      <div className="payment-section">
        <div className="header">Forma de Pagamento</div>
        <div className={`expand-button ${showPaymentSection ? 'expanded' : ''}`}>
          <button onClick={handleToggleOptions}>
            {paymentOption}
          </button>
          {showPaymentSection && (
            <div className="payment-options show">
              <ul>
                {['- Selecionar -', ...paymentOptions].map((option) => (
                  <li
                    key={option}
                    onClick={() => handlePaymentOptionSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderValueTotal = () => {
    return (
      <div className="value-total">
        <span className="bold">Valor Total:</span>
        <span className="bold">R$ 25,00</span>
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="left-section">
        {renderValueTotal()}
        {renderAddressSection()}
        {showNewAddressForm && renderNewAddressForm()}
      </div>

      <div className="right-section">
        {renderPaymentSection()}
      </div>
    </div>
  );
};

export default Pagamento;
