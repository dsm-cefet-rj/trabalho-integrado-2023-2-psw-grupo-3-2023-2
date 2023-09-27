import React, { useEffect } from 'react';
import './Ingredientes.css'; 
import { ingredientesData } from '../../data/IngredientesData'; 
import IngredientButton from '../../Components/IngredientButton/IngredientButton';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useStore from '../../Components/Store/Store';

function IngredientesPizza() {
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
  const setIngredientesSelecionados = useStore((state) => state.setIngredientesSelecionados);

  useEffect(() => {
    useStore.setState({ ingredientesData: ingredientesData });
  }, []);

  const handleClickIngredient = (ingrediente) => {
    // Lógica para adicionar/remover ingredientes selecionados
    const index = ingredientesSelecionados.findIndex((item) => item.id === ingrediente.id);

    if (index !== -1) {
      // Se o ingrediente já estiver selecionado, remova-o
      const updatedIngredientes = [...ingredientesSelecionados];
      updatedIngredientes.splice(index, 1);
      setIngredientesSelecionados(updatedIngredientes);
    } else {
      // Caso contrário, adicione-o à lista de ingredientes selecionados
      setIngredientesSelecionados([...ingredientesSelecionados, ingrediente]);
    }
  };

  return (
    <div className="page-container">
      <h2 className="ingredientes_title">Selecione os ingredientes da Pizza:</h2>
      <div className="ingredientes-grid">
        {ingredientesData.map((ingrediente) => (
          <IngredientButton
            key={ingrediente.id}
            id={ingrediente.id}
            ingrediente={ingrediente.ingrediente}
            valor={ingrediente.preços}
            onClick={() => handleClickIngredient(ingrediente)}
            selected={ingredientesSelecionados.some((item) => item.id === ingrediente.id)}
          />
        ))}
      </div>

      {/* Botões de navegação ou confirmação */}
      <div className="button-container">
        <CustomButton to="/sabores" className="button">Voltar</CustomButton>
        <CustomButton to="/carrinho" className="button">Confirmar</CustomButton>
      </div>
    </div>
  );
}

export default IngredientesPizza;