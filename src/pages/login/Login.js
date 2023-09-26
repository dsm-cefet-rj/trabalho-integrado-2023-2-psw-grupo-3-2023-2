import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../Components/CustomButton/CustomButton'
import Input from '../../Components/Input/input'

export const Login = () => {
  return ( 
    <div className="login-container">
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <div className="form-container-login">
        <h1>Login</h1>
        <form id="login-form">
          <Input type='text' text='Usuário' name='usuário' placeholder='Usuário' required='required' />
          <Input type='password' text='Senha' name='senha' placeholder='Senha' required='required' />
          <CustomButton type="submit">Entrar</CustomButton>
        </form>
        <NavLink to="/register" style={({ isActive }) => ({ color: isActive ? 'greenyellow' : 'rgba(33, 33, 33, 0.867)' })} className="cadastro">
          Registrar-se
        </NavLink>
      </div>
    </div>
  )
}
export default Login