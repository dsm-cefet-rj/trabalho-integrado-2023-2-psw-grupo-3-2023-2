import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from '../../Components/Store/Store';
import './Pagamento.css';
import TelaVazia from '../TelaVazia/TelaVazia';

const EnderecoSalvo = ({ descricao, endereco, estado, cep, onClick, isSelected }) => {
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
      <p className={`endereco-estado ${isSelected ? 'selected-text' : ''}`}>
        {estado}
      </p>
      <p className={`endereco-cep ${isSelected ? 'selected-text' : ''}`}>
        {cep}
      </p>
    </div>
  );
};

const enderecosSalvos = [
  {
    descricao: 'Casa',
    endereco: 'Rua A, 123 - Bairro ABC - Cidade X',
    estado: 'Estado X',
    cep: 'CEP: 12345-678',
  },
  {
    descricao: 'Trabalho',
    endereco: 'Avenida B, 456 - Bairro DEF - Cidade Y',
    estado: 'Estado Y',
    cep: 'CEP: 12345-786',
  },
  {
    descricao: 'Apartamento',
    endereco: 'Rua C, 789 - Bairro GHI - Cidade Z',
    estado: 'Estado Z',
    cep: 'CEP: 12345-888',
  },
];

const Pagamento = () => {
  const [showAddressSection, setShowAddressSection] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [paymentOption, setPaymentOption] = useState('- Selecionar -');
  const [selectedEndereco, setSelectedEndereco] = useState(null);
  const [showSelectedEndereco, setShowSelectedEndereco] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const totalValue = location.state.totalValue;
  const limparCarrinho = useStore(state => state.limparCarrinho);

  const handleSelectEndereco = (descricao) => {
    setSelectedEndereco(descricao);
    setShowSelectedEndereco(true);
  };

  const handleSelecionar = () => {
    setShowAddressSection(false);
    setShowPaymentSection(true);
    setShowSelectedEndereco(false);
  };

  const handleVoltar = () => {
    setShowSelectedEndereco(false);
    setSelectedEndereco(null);
    setShowAddressSection(true);
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
        estado={endereco.estado}
        cep={endereco.cep}
        onClick={() => handleSelectEndereco(endereco.descricao)}
        isSelected={selectedEndereco === endereco.descricao}
      />
    ));
  };

  const handleFecharEndereco = () => {
    setShowSelectedEndereco(false);
    setSelectedEndereco(null);
  };

  const renderSelectedEndereco = () => {
    const selectedEnderecoDetails = enderecosSalvos.find(
      (endereco) => endereco.descricao === selectedEndereco
    );

    return (
      <div className="selected-endereco">
        <div className="endereco-header">
          <p className="endereco-descricao">{selectedEndereco}</p>
          <span className="close-button" onClick={handleFecharEndereco}>
            &#x2715;
          </span>
        </div>
        <p className="endereco-texto">
          {selectedEnderecoDetails.endereco}, {selectedEnderecoDetails.estado}
        </p>
        <p className="endereco-texto cep">{selectedEnderecoDetails.cep}</p>
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

  const paymentOptions = ['Cartão', 'Dinheiro'];

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
        <span className="bold">R$ {totalValue.toFixed(2)}</span>
      </div>
    );
  };

  const handlePagar = () => {
    limparCarrinho();
    navigate('/tela-vazia');
  };

  const isPagarButtonDisabled = !selectedEndereco || paymentOption === '- Selecionar -';

  return (
    <div className="page-container">
      {renderValueTotal()}
      <div className="left-section">
        {showSelectedEndereco ? (
          renderSelectedEndereco()
        ) : (
          <>
            {renderAddressSection()}
            {showNewAddressForm && renderNewAddressForm()}
          </>
        )}
      </div>

      <div className="right-section">
        {renderPaymentSection()}
      </div>

      <div className="buttons-container-outer">
        <div className="buttons-container">
          <button onClick={handlePagar} disabled={isPagarButtonDisabled}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagamento;
