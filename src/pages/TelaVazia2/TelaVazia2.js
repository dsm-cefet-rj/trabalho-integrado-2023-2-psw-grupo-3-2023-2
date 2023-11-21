import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaVazia2.css';

const TelaVazia2 = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5); // Tempo em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirecionar para a página principal após 5 segundos
    setTimeout(() => {
      navigate('/');
    }, 5000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="tela-vazia-container">
      <div className="mensagem">
        Seu pedido foi entregue com sucesso!!
      </div>
      <div>
        Redirecionando para a página principal em: {countdown} segundos
      </div>
    </div>
  );
};

export default TelaVazia2;
