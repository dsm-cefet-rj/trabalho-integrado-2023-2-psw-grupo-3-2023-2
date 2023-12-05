import React, {useState} from 'react' 
import './Login.css'
import { NavLink, useNavigate} from 'react-router-dom'
import CustomButton from '../../Components/CustomButton/CustomButton'
import Input from '../../Components/Input/input'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [valido, setValido] = useState(false)
    const [usuarioBD, setUsuarioDB] = useState({})

    const usenavigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validate()) {
        const logObj = { email, password: senha }
        fetch("http://localhost:3000/user/login", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(logObj)
        })
        .then(response => response.json())
        .then(data => {
          usenavigate('/')
          toast.success('Login realizado com sucesso')
        })
      }
    }

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
      result = false;
      toast.warning('Por favor digite o email');
    }
    if (senha === '' || senha === null) {
      result = false;
      toast.warning('Por favor digite a senha');
    }
    return result;
  }
    



  return ( 
    <div className="login-container">
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <div className="form-container-login">
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <Input type='email' text='E-mail' name='usuário' placeholder='E-mail' required='required' value={email} handleOnChange={e => setEmail(e.target.value)} />
          <Input type='password' text='Senha' name='senha' placeholder='Senha' required='required' value={senha} handleOnChange={e => setSenha(e.target.value)}/>
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