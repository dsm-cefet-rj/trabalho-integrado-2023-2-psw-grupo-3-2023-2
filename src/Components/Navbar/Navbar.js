import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'white' : 'white' })} className='buttonNav'>
                Pizza Pra Galera
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/sabores" style={({ isActive }) => ({ color: isActive ? 'white' : 'white' })} className='buttonNav'>
                        Cardápio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? 'white' : 'white' })} className='buttonNav'>
                        Entrar
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar