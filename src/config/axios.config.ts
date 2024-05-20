import _axios from 'axios';

import { env } from '@/shared/utils/env-config.util';

const apiUrl = env.API_URL;

export const axiosConfig = {
  baseURL: apiUrl,
  withCredentials: true,
};

export const axios = _axios.create(axiosConfig);

export const getHeaders = () => {
  try {
    const user = localStorage.getItem('user');
    const token = user ? JSON.parse(user).token : '';

    return {
      Authorization: `Bearer ${token}`,
    };
  } catch (error) {
    return {};
  }
};
