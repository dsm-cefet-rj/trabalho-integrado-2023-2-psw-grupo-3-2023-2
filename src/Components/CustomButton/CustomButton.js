import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomButton.css'

function CustomButton(props) {
  const { to, onClick, children, type } = props;

  if (to) {
    // Link de redirecionamento se "to" estiver definido
    return (
      <NavLink className="button" to={to}>
        {children}
      </NavLink>
    );
  } else if (type === 'submit') {
    // Botão de envio de formulário
    return (
      <button type="submit" className="button">
        {children}
      </button>
    );
  } else if (onClick) {
    // Se a prop "onClick" estiver definida, renderize um botão com ação de clique
    return (
      <button type={type || 'button'} className="button" onClick={onClick}>
        {children}
      </button>
    );
  } else {
    // Trate outras condições como necessário
    return null;
  }
}

export default CustomButton;