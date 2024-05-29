import React, { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const BurgerList = () => {

    const openBurger = (e) => {
        document.querySelector('.burger_list').classList.toggle('open');
        e.stopPropagation();
    };

    const closeBurger = () => {
        document.querySelector('.burger_list').classList.remove('open');
    };

    useEffect(() => {
        window.addEventListener('click', closeBurger);
        return () => window.removeEventListener('click', closeBurger);
    }, []);

    return (
        <div className='burger_wrapper'>
            <button className="burger" onClick={(e) => openBurger(e)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className="burger_list">
                <NavLink to='/' >Главная</NavLink>
                <NavLink to='/projects' >Проекты</NavLink>
                <NavLink to='/statistic' >Статистика</NavLink>
                <NavLink to='/tape' >Лента</NavLink>
                <NavLink to='/targets' >Цели</NavLink>
            </div>
        </div>
    );
};

export default BurgerList;
