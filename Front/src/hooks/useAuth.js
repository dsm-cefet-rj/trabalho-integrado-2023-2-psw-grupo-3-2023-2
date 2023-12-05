import { toast } from "react-toastify";
import React, {useState} from 'react' 
import { NavLink, useNavigate} from 'react-router-dom'
  
  
  const login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [valido, setValido] = useState(false)
    const usenavigate = useNavigate();
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
    }

    export default login;