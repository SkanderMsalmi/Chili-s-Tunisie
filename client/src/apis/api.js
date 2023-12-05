import axios from 'axios';

const baseURL = 'http://localhost:3000/api';


const api = axios.create({
    baseURL,
});


export const fetchData = async () => {
    const response = await api.get('/');
    return response.data;

};