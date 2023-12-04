import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaVazia.css';

const TelaVazia = () => {
  const [showGif, setShowGif] = useState(true);
  const [showNovoConteiner, setShowNovoConteiner] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const gifTimer = setTimeout(() => {
      setShowGif(false);
      setShowNovoConteiner(true);
    }, 9000); 

    const countdownTimer = setInterval(() => {
      if (countdown > 0 && showNovoConteiner) {
        setCountdown((prev) => prev - 1);
      } else if (countdown === 0) {
        clearInterval(countdownTimer);
        navigate('/');
      }
    }, 1000);

    return () => {
      clearTimeout(gifTimer);
      clearInterval(countdownTimer);
    };
  }, [countdown, navigate, showNovoConteiner]);

  return (
    <div className="tela-vazia-container">
      {showGif && (
        <p className={`mensagem com-movimento ${showNovoConteiner ? 'oculto' : ''}`}>
          Seu pedido vai chegar em instantes...
        </p>
      )}
      <div className={`gif-container ${showGif ? 'com-gif' : ''}`}>
        {showGif && (
          <img
            className="gif"
            src={`${process.env.PUBLIC_URL}/images/Delivery.gif`}
            alt="GIF"
          />
        )}
      </div>

      {showNovoConteiner && (
        <div className={`novo-conteiner mostrar`}>
          <p className="mensagem-sucesso">
            Seu pedido foi entregue com sucesso! Obrigado pela preferência.
          </p>
          <p className="contador">
            Voltando para o início em: {countdown} segundos
          </p>
        </div>
      )}
    </div>
  );
};

export default TelaVazia;
