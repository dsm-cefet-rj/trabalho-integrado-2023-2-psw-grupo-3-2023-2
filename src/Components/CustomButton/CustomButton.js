import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomButton.css'

function CustomButton(props) {
  const { to, onClick, children, type } = props;

  if (to) {
    return (
      <NavLink className="button" to={to}>
        {children}
      </NavLink>
    );
  } else if (type === 'submit') {
    return (
      <button type="submit" className="button">
        {children}
      </button>
    );
  } else if (onClick) {
    return (
      <button type={type || 'button'} className="button" onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return null;
  }
}

export default CustomButton;