// src/axiosInstance.js
import axios from 'axios';

// Создаем экземпляр axios с базовыми настройками
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8800', // Заменишь на свой URL
});

// Добавляем интерсептор для добавления JWT токена из localStorage в заголовки запросов
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
