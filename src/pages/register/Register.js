import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Register.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  
  const [id, setId] = useState("");
  const [nome, setNome ] = useState("");
  const [email, setEmail ] = useState("");
  const [celular, setCelular] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Por favor, preencha corretamente o campo de';
    if (nome === null || nome === '') {
        isproceed = false;
        errormessage += ' nome';
    }
    if (senha === null || senha === '') {
        isproceed = false;
        errormessage += ' senha';
    }
    if (email === null || email === '') {
        isproceed = false;
        errormessage += ' Email';
    }
    if (senha !== confirmSenha) {
      isproceed = false;
      toast.error('Senhas diferentes');
    }

    if (!isproceed) {
        toast.warning(errormessage)
    } else {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            // Validação do email
        } else {
            isproceed = false;
            toast.warning('Digite um email válido')
        }
    }
    return isproceed;
  }

 

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { nome, email, senha, celular, rua, numero };
    console.log(regobj)
    if (IsValidate()) {
    fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
    }).then((res) => {
        toast.success('Registrado com sucesso.')
        navigate('/login');
    }).catch((err) => {
        toast.error('Erro :' + err.message);
    });
  }}

  return (
    <div className="register-container">
        <div className="form-container">
          <h1>Cadastro</h1>
          <form id="register-form" onSubmit={handlesubmit}>
              <div className="form-group">
                  <label htmlFor="name" className="label">Nome:</label>
                  <input type="text" id="name" name="name" required="required" placeholder="João dos Santos" value={nome} onChange={e => setNome(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label">Email:</label>
                <input type="text" id="email" name="email" required="required" placeholder="nome@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="telefone" className="label">Celular (Com DDD):</label>
                <input type="text" id="telefone" name="telefone" required="required" placeholder="(00) 00000-0000" value={celular} onChange={e => setCelular(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="rua" className="label">Rua:</label>
                <input type="text" id="rua" name="rua" required="required" placeholder="Rua General Canabarro" value={rua} onChange={e => setRua(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="numero" className="label">Número:</label>
                <input type="text" id="numero" name="numero" required="required" placeholder="Casa 10 ou Apartamento 3" value={numero} onChange={e => setNumero(e.target.value)}/>
              </div>
              <div className="form-group">
                  <label htmlFor="password" className="label">Senha:</label>
                  <input type="password" id="password" name="password" required="required" value={senha} onChange={e => setSenha(e.target.value)}/>
              </div>
              <div className="form-group">
                   <label htmlFor="confirm-password" className="label">Confirmar Senha:</label>
                   <input type="password" id="confirm-password" name="confirm-password" required="required" value={confirmSenha} onChange={(e) => {setConfirmSenha(e.target.value);}}/>
              </div>
              <button type="submit" className="button">Cadastrar</button>
          </form>
        </div>
      </div>
  )
}

export default Register
