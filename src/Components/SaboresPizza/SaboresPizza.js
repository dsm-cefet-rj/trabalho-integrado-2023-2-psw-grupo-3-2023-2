import React, { useEffect } from 'react';
import './sabores.css';
import { saboresData } from '../../data/PizzasData';
import PizzaButton from '../PizzaButton/PizzaButton';
import CustomButton from '../CustomButton/CustomButton';
import useStore from '../Store/Store';

function SaboresPizza() {
  const saborSelecionado = useStore((state) => state.saborSelecionado);
  const setSelectedSabor = useStore((state) => state.setSelectedSabor);

  useEffect(() => {
    useStore.setState({ saboresData: saboresData });
  }, []);

  const handleClickPizza = (sabor) => {
    if (saborSelecionado && saborSelecionado.id === sabor.id) {
      setSelectedSabor(null);
    } else {
      setSelectedSabor(sabor);
    }
  };

  return (
    <div className="page-container">
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
        <CustomButton to="/tamanhos">Ir para Tamanhos de Pizza</CustomButton>
        <CustomButton to="/carrinho" className="button">Confirmar</CustomButton>
      </div>
    </div>
  );
}

export default SaboresPizza;
