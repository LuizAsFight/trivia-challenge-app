import Axios from 'axios';
import { getToken } from './auth';

const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  async config => {
    const token = getToken();
    if (token) {
      config.headers['X-AUTH-TOKEN'] = token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axios;
