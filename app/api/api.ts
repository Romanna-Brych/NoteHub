import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://nodejs-hw-fn82.onrender.com',
  withCredentials: true,
});

// baseURL: 'https://notehub-api.goit.study',
// https://nodejs-hw-fn82.onrender.com
