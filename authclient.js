// src/authclient.js
import axiosInstance from './axiosInstance';

// Функция для входа
export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('http://127.0.0.1:8800/auth/login', {
            email,
            password,
        });
        const token = response.data.refresh_token;
        if (token) {
            localStorage.setItem('jwt', token);
        }
        return response.data;
    } catch (error) {
        console.error('Ошибка при входе', error);
        throw error;
    }
};

// Функция для регистрации
export const register = async (name, email, password, passwordConfirm) => {
    try {
        const response = await axiosInstance.post('/auth/register', {
            name,
            email,
            password,
            passwordConfirm,
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при регистрации', error);
        throw error;
    }
};

// Функция для выхода
export const logout = async () => {
    try {
        localStorage.removeItem('jwt');
        return { message: 'Logout successful' };
    } catch (error) {
        console.error('Ошибка при выходе', error);
        throw error;
    }
};
