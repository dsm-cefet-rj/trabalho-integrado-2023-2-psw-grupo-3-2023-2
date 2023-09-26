import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

export const Home = () =>{
    return(
        <div className='home_container'>
            <img src='../../images/PizzaHome.png' alt='pizza'/>
            <h1>Pizzas Salgadas</h1>
            <NavLink to='/tamanhos' className='home_button'>
                Ver tudo ➞
            </NavLink>
        </div>
    )
}

export default Home