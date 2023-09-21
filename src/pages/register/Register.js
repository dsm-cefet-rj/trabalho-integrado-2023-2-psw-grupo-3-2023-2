import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div className="register-container">
        <div className="form-container">
          <h1>Cadastro</h1>
          <form id="register-form">
              <div className="form-group">
                  <label for="name" className="label">Nome:</label>
                  <input type="text" id="name" name="name" required = "required" placeholder= "João dos Santos"/>
              </div>
              <div className="form-group">
                <label for="email" className="label">Email:</label>
                <input type="text" id="email" name="email" required = "required" placeholder= "nome@email.com"/>
              </div>
              <div className="form-group">
                <label for="email" className="label">Confirmar Email:</label>
                <input type="text" id="email" name="email" required = "required" placeholder= "nome@email.com"/>
              </div>
              <div className="form-group">
                <label for="telefone" className="label">Celular (Com DDD):</label>
                <input type="text" id="telefone" name="telefone" required = "required" placeholder= "(00) 00000-0000"/>
              </div>
              <div className="form-group">
                <label for="endereco" className="label">Endereço:</label>
                <input type="text" id="endereco" name="endereco" required = "required" placeholder= "Rua General Canabarro"/>
              </div>
              <div className="form-group">
                <label for="numero" className="label">Número:</label>
                <input type="text" id="numero" name="numero" required = "required" placeholder= "Casa 10 ou Apartamento 3"/>
              </div>
              <div className="form-group">
                <label for="bairro" className="label">Bairro:</label>
                <input type="text" id="bairro" name="bairro" required = "required" placeholder= "São Cristóvão"/>
              </div>
              <div className="form-group">
                  <label for="password" className="label">Senha:</label>
                  <input type="password" id="password" name="password" required = "required"/>
              </div>
              <div className="form-group">
                  <label for="password" className="label">Confirmar Senha:</label>
                  <input type="password" id="password" name="password" required = "required"/>
              </div>
              <button type="submit" className="button">Cadastrar</button>
          </form>
        </div>
      </div>
  )
}

export default Register
