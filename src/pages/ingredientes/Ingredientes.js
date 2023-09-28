import React, { useEffect } from 'react';
import './Ingredientes.css';
import { ingredientesData } from '../../data/IngredientesData'; // Certifique-se de importar o objeto ingredientesData
import IngredientButton from '../../Components/IngredientButton/IngredientButton';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useStore from '../../Components/Store/Store';
import { Link } from 'react-router-dom';

function IngredientesPizza() {
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
  const setIngredientesSelecionados = useStore((state) => state.setIngredientesSelecionados);
  const tamanhoSelecionado = useStore((state) => state.tamanhoSelecionado);

  const handleClickIngredient = (ingrediente) => {
    const index = ingredientesSelecionados.findIndex((item) => item.id === ingrediente.id);

    if (index !== -1) {
      const updatedIngredientes = [...ingredientesSelecionados];
      updatedIngredientes.splice(index, 1);
      setIngredientesSelecionados(updatedIngredientes);
    } else {
      setIngredientesSelecionados([...ingredientesSelecionados, ingrediente]);
    }
  };

  return (
    <div className="page-containerI">
      <h2 className="ingredientes_title">Selecione os ingredientes da Pizza:</h2>
      <div className="ingredientes-grid">
        {ingredientesData.map((ingrediente) => (
          <IngredientButton
            key={ingrediente.id}
            id={ingrediente.id}
            ingrediente={ingrediente.ingrediente}
            valor={ingrediente.valor} // Passar o valor diretamente do ingredientesData
            onClick={() => handleClickIngredient(ingrediente)}
            selected={ingredientesSelecionados.some((item) => item.id === ingrediente.id)}
          />
        ))}
      </div>

      {/* Botões de navegação ou confirmação */}
      <div className="button-container">
        <CustomButton to="/sabores" className="button">Voltar</CustomButton>
        <Link to={{ pathname: '/carrinho', state: { tamanhoSelecionado } }}>
          <button className="button">Confirmar</button>
        </Link>
      </div>
    </div>
  );
}

export default IngredientesPizza;
