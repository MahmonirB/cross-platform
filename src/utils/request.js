import axios from 'axios';

export const Authorization = '';

export const instance = axios.create({
  baseURL: '',
  headers: {
    Authorization,
  },
});

export default instance.request;
