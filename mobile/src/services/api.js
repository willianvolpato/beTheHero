import axios from 'axios';

const api = axios.create({
   baseURL: 'http://10.5.0.36:3333', 
});

export default api;