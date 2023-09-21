import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sabores.css'
import { saboresData } from '../../data/PizzasData';
import PizzaButton from '../PizzaButton/PizzaButton';

function SaboresPizza() {


    const handleClickPizza = (id) => {
        console.log('ID: ', id);
    }


    return (
        <div className="page-container">
            <h2 className="sabores_title">Selecione a quantidade de Sabores da Pizza:</h2>
            <div>
                {saboresData.map((e) => {
                    return <PizzaButton
                        key={e.id}
                        id={e.id}
                        sabor={e.sabor}
                        descricao={e.descrição}
                        valor={e.preço}
                        onClick={handleClickPizza}
                    />
                    
                })}



                <NavLink className="button-container" to="/">Ir para Tamanhos de Pizza</NavLink>
                <br></br>   
                <NavLink className="button-container" to="/">Confirmar</NavLink>
            </div>
        </div>
    );
}

export default SaboresPizza;
