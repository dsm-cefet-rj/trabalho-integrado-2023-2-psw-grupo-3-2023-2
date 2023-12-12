import './Ingredientes.css';
import IngredientButton from '../../Components/IngredientButton/IngredientButton';
import CustomButton from '../../Components/CustomButton/CustomButton';
import useStore from '../../Components/Store/Store';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';

function IngredientesPizza() {
  const ingredientesSelecionados = useStore((state) => state.ingredientesSelecionados);
  const setIngredientesSelecionados = useStore((state) => state.setIngredientesSelecionados);
  const navigate = useNavigate();
  const [ingredientesData, setIngredientesData] = useState([]);

  const handleConfirmar = () => {
    if(ingredientesSelecionados.length === 0) {
      toast.error("Selecione um ingrediente");
    }
    else{
    navigate('/sabores');
    }
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

  useEffect(() => {
    fetch('http://localhost:3001/ingredient/get', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setIngredientesData(Array.isArray(data) ? data : data.ingredient);
        console.log(ingredientesData);
    })
    .catch((err) => {
        console.error('Erro:', err);
    });
    
  }, []);

  if (ingredientesData.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="page-containerI">
      <h2 className="ingredientes_title">Selecione os ingredientes da Pizza:</h2>
      <div className="ingredientes-grid">
        {ingredientesData.map((e) => (
          <IngredientButton
            key={e.id}
            id={e.id}
            ingrediente={e.ingrediente}
            valor={e.valor} // Passar o valor diretamente do ingredientesData
            onClick={() => handleClickIngredient(e)}
            selected={ingredientesSelecionados.some((item) => item.id === e.id)}
          />
        ))}
      </div>

      {/* Botões de navegação ou confirmação */}
      <div className="button-container">
        <CustomButton to="/sabores" className="button">Voltar</CustomButton>
          <CustomButton onClick={handleConfirmar} className="button">Confirmar</CustomButton>
      </div>
    </div>
  );
}

export default IngredientesPizza;
