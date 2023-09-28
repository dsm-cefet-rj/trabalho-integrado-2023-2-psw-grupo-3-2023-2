import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import HomePizza from '../../images/PizzaHome.png'
import HomePizza from '../../images/PizzaHome2.png'

export const Home = () =>{
    return(
        <div className='home_container'>
            <img src={HomePizza} alt='pizza'/>
            <h1>PIZZAS SALGADAS</h1>
            <NavLink to='/tamanhos' className='home_button'>
                <b>VER TODOS ➞</b>
            </NavLink>
        </div>

        
    )
}

export default Home