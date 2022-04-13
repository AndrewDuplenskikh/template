import axios from 'axios';

export const serverURI = 'http://localhost:3012';

export const instanceAxios = axios.create({
    baseURL: serverURI,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});
