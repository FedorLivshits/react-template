import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'url',
  headers: {
    'Content-Type': 'application/json',
  },
});
