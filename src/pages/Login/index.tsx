import React, { useState } from 'react'
import Header from '../../components/Header'
import './login.css'
import Button from '../../components/Button'
import { api } from '../../server/api'
import { notifyError } from '../../components/notifys/toastfy'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { maskCPF } from '../../mask/cpfMask'

type Props = {}

const Login = (props: Props) => {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        cpf: '',
        password: '',
    });  

    const loginAuth = () => {
        event?.preventDefault()
        api.post('/auth/login', login).then((res) => {
            localStorage.setItem('token', res.data.token)

            window.location.href = 'https://www.flamengo.com.br/'
        }).catch((err) => {
            notifyError(err.response.data.message)
        })
    }

  return (
    <div className='container-login'>
        <Header />

        <form className='container-login-welcome' onSubmit={loginAuth}>
            <h2>Bem vindo!</h2>

            <div className='container-login-inputs'>
                <div className='login-input'>
                    <label htmlFor="cpf">Cpf</label>
                    <input 
                        type="text"  
                        placeholder='Digite seu Cpf'
                        value={login.cpf}
                        onChange={(e) => setLogin({...login, cpf: maskCPF(e.target.value)})}    
                    />
                </div>
                
                <div className='login-input'>
                    <label htmlFor="cpf">Senha</label>
                    <input 
                        type="password" 
                        placeholder='Digite sua senha'
                        value={login.password}
                        onChange={(e) => setLogin({...login, password: e.target.value})}    
                    />
                </div>
                <div className='login-button'>
                    <Button text='Login'/>
                </div>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Login