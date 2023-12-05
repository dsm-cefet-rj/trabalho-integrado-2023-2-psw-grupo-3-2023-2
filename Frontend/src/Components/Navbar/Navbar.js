import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../images/Icone.png'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/">
                <img src={logo} alt='Logo' className={styles.img}/>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/login" className={styles.item}  >
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Carrinho" className={styles.item}  >
                        Carrinho
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar