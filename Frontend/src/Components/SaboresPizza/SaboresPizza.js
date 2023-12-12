import React, { useEffect } from 'react';
import './sabores.css';
import PizzaButton from '../PizzaButton/PizzaButton';
import CustomButton from '../CustomButton/CustomButton';
import useStore from '../Store/Store';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SaboresPizza() {
  const saborSelecionado = useStore((state) => state.saborSelecionado);
  const setSelectedSabor = useStore((state) => state.setSelectedSabor);
  const limpar = useStore(state => state.limpar);
  const navigate = useNavigate();
  const addOrder = useStore((state) => state.addOrder);
  const saboresData = useStore((state) => state.saboresData);


  const handleConfirmar = () => {
    if(!saborSelecionado) {
      toast.error("Selecione um sabor");
    }
    else{
    console.log(saborSelecionado);
    addOrder();
    limpar();
    navigate('/carrinho');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/flavor', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        useStore.setState({ saboresData: data.flavor });
        console.log(saboresData);
    })
    .catch((err) => {
        console.error('Erro:', err);
    });
    
  }, []);

  const handleClickPizza = (sabor) => {
    if (saborSelecionado && saborSelecionado.id === sabor.id) {
      setSelectedSabor(null);
    } else {
      setSelectedSabor(sabor);
    }
  };

  if (saboresData.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="page-containerS">
      <h2 className="sabores_title">Selecione o sabor da Pizza:</h2>
      <div className="sabores-grid">
        {saboresData.map((e) => {
          return (
            <PizzaButton
              key={e.id}
              id={e.id}
              sabor={e.sabor}
              descricao={e.descrição}
              valor={e.preços['30cm']}
              onClick={() => handleClickPizza(e)}
              selected={saborSelecionado && saborSelecionado.id === e.id}
            />
          );
        })}
      </div>

      <div className="button-container">
        <CustomButton to="/tamanhos">Voltar para Tamanhos de Pizza</CustomButton>
        <CustomButton to="/ingredientes">Adicionar Ingredientes Extras</CustomButton>
        <CustomButton onClick={handleConfirmar} className="button">Confirmar</CustomButton>
      </div>
    </div>
  );
}

export default SaboresPizza;

