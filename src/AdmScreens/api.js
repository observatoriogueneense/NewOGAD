import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backcgad.onrender.com/',
    // baseURL: 'https://backunilabtem.herokuapp.com/',
    // baseURL: 'http://localhost:8000/'
});

export default api;