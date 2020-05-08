import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/'
});

export default clienteAxios;