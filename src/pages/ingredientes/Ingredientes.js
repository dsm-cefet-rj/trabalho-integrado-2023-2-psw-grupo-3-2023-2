import React, { useEffect } from 'react';
import './Ingredientes.css';
import { ingredientesData } from '../../data/IngredientesData'; // Certifique-se de importar o objeto ingredientesData
import IngredientButton from '../../Components/IngredientButton/IngredientButton';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useStore from '../../Components/Store/Store';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function IngredientesPizza() {
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
  const setIngredientesSelecionados = useStore((state) => state.setIngredientesSelecionados);
  const tamanhoSelecionado = useStore((state) => state.tamanhoSelecionado);
  const addOrder = useStore((state) => state.addOrder);
  const navigate = useNavigate();

  const handleConfirmar = () => {
    // Call the addOrder function to add the order to the orders array
    addOrder();
    // Redirect to the Carrinho page
    navigate('/carrinho');
  };

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
          <button onClick={handleConfirmar} className="button">Confirmar</button>
        </Link>
      </div>
    </div>
  );
}

export default IngredientesPizza;
