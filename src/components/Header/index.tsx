import React from 'react'
import './Header.css'

type Props = {}

const Header = (props: Props) => {
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
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Reservar</a>
                </li>
                <li>
                    <a href="#">Relatório</a>
                </li>
            </ul>
        </nav>
    </section>
  )
}


export default Header