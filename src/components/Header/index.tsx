import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

type Props = {}

const Header = (props: Props) => {

    const navigate = useNavigate();

    const [logged, setLogged] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            try {
                const decode = jwtDecode(token);

                setLogged(true);
            } catch (error) {
                setLogged(false);
            }
        }
    },[])

  return (
    <section className='section-header'>
        <nav className="menu-hamburger">
            <input id="menu-hamburguer" type="checkbox" />
            <label htmlFor="menu-hamburguer">
                <div className="menu">
                    <span className="hamburguer"></span>
                </div>
            </label>
            <ul className="menu-hamburguer-elements show">
                <li>
                    <img 
                        src="https://i.ibb.co/WHSn8nt/logo-Pormade-3.png" 
                        alt="logo" 
                        className='logo'
                        onClick={() => navigate('/')}
                    />
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/reserve">Reservar</a>
                </li>
                {   logged  ? 
                            <li>
                                <a href="/report">Relatório</a>
                            </li>
                            :
                            <li>
                                <a href="/login">Login</a>
                            </li>
                }

            </ul>
        </nav>
    </section>
  )
}


export default Header