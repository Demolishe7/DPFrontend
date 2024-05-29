// src/pages/sign_in/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../authclient'; // Импортируем функцию login
import './css/sign_in.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            await login(email, password);
            // После успешного входа перенаправляем пользователя на страницу Home
            navigate('/home');
        } catch (error) {
            setError('Ошибка при входе. Проверьте введенные данные.');
        }
    };

    return (
        <div className='sign_in_page'>
            <div className="sign_in_content">
                <h1>Sign in</h1>
                <form onSubmit={handleSignIn}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <a href="#">Forgot password?</a> */}
                    <button type="submit">Sign in</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignIn;
