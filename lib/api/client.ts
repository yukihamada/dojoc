import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.yourdomain.com',
  timeout: 1000,
});
