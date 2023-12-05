import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from '../../Components/Store/Store';
import './Pagamento.css';
import { toast } from "react-toastify";
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
];

const Pagamento = () => {
  const [showAddressSection, setShowAddressSection] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [showNewPaymentForm, setShowNewPaymentForm] = useState(false);
  const [paymentOption, setPaymentOption] = useState('- Selecionar -');
  const [selectedEndereco, setSelectedEndereco] = useState(null);
  const [showSelectedEndereco, setShowSelectedEndereco] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const totalValue = location.state.totalValue;
  const limparCarrinho = useStore(state => state.limparCarrinho);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [numeroc, setNumeroc] = useState('');
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [data, setData] = useState('');

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
    setShowNewPaymentForm(false);
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

  const handleAdicionarNovaFormaPagamento = () => {
    setShowNewPaymentForm(!showNewPaymentForm);
    setShowPaymentSection(false);
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

  const handleNewAdress = (e) => {
    e.preventDefault();
    let newAddress = {neighborhood:bairro, street:rua, number:numero, complement:complemento};
    console.log(newAddress);
    fetch("http://localhost:3000/address/signup", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newAddress)
    }).then((res) => {
      toast.success('Endereço adicionado com sucesso.')
    }).catch((err) => {
      toast.error('Erro :' + err.message);
    });
  }


  const renderNewAddressForm = () => {
    return (
      <div className="new-address-form">
        <form onSubmit={handleNewAdress}> 
          <input type="text" id='bairro' required="required" placeholder="Bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
          <input type="text" id='rua' required="required" placeholder="Rua" value={rua} onChange={e => setRua(e.target.value)} />
          <input type="text" id='numero' required="required" placeholder="Número" value={numero} onChange={e => setNumero(e.target.value)} />
          <input type="text" id='complemento' placeholder="Complemento (Opcional)" value={complemento} onChange={e => setComplemento(e.target.value)} />
          <button type="submit">Adicionar Endereço</button>
        </form>
      </div>
    );
  };

  const handleVoltarPay = () => {
    setShowNewPaymentForm(false);
  };

  const paymentOptions = ['Cartão (Pagar na Entrega)', 'Dinheiro'];

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
          {!showNewPaymentForm && (
            <button onClick={handleAdicionarNovaFormaPagamento}>
               Cartão de Crédito
            </button>
          )}
          {showNewPaymentForm && (
            <button onClick={handleVoltarPay} className="action-button">
              Voltar
            </button>
          )}
        </div>
      </div>
    );
  };

  const handleNewPayment = (e) => {
    e.preventDefault();
    let newPayment = {cardNumber:numeroc, name:nome, validate:data, cvv:codigo, value:totalValue};
    console.log(newPayment);
    fetch("http://localhost:3000/card/signup", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newPayment)
    }).then((res) => {
      toast.success('Cartão adicionado com sucesso.')
    }).catch((err) => {
      toast.error('Erro :' + err.message);
    });
  }

  const renderNewPaymentForm = () => {
    return (
      <div className="new-address-form">
        <form onSubmit={handleNewPayment}> 
          <input type="number" maxLength="16" id='numeroc' required="required" placeholder="Número do Cartão" value={numeroc} onChange={e => setNumeroc(e.target.value)} />
          <input type="text" id='nome' placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
          <input type="month" id='data' required="required" placeholder="Validade" value={data} onChange={e => setData(e.target.value)} />
          <input type="text" id='codigo' maxLength="3" required="required" placeholder="Código" value={codigo} onChange={e => setCodigo(e.target.value)} />
          <button type="submit">Adicionar Cartão</button>
        </form>
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

  const handleVoltarCar = () => {
    navigate('/carrinho');
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
        {showNewPaymentForm && renderNewPaymentForm()}
      </div>

      <div className="buttons-container-outer">
        <div className="buttons-container">
          <button onClick={handlePagar} disabled={isPagarButtonDisabled}>
            Pagar
          </button>
          <button onClick={handleVoltarCar}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagamento;
