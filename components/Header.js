import React from 'react';
import BurgerList from './BurgerList';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/sign_in'); // Пример маршрута для профиля пользователя
    };

    return (
        <header className="header">
            <BurgerList />
            <div className="user_icon" onClick={handleUserClick}>
                <span className="target_icon_user"></span>
            </div>
        </header>
    );
};

export default Header;
