import { AxiosError } from '../models/axios.model';

export const getError = (error: AxiosError): string => {
  return error.response?.data?.message || error.message || '';
};

export const getErrorStatus = (error: AxiosError): number => {
  return error.response?.data?.statusCode || 500;
};
