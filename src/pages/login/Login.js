import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container-login">
        <h1>Login</h1>
        <form id="login-form">
          <div className="form-group">
            <label for="username" className="label">Usuário:</label>
            <input type="text" id="username" name="username" required="required" />
          </div>
          <div className="form-group">
            <label for="password" className="label">Senha:</label>
            <input type="password" id="password" name="password" required="required" />
          </div>
          <button type="submit" className="button">Entrar</button>
          <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'rgba(33, 33, 33, 0.867)' })} className="cadastro">
            Registrar-se
          </NavLink>
        </form>
      </div>
    </div>
  )
}
export default Login
