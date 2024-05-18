import { AxiosResponse } from 'axios';

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

export interface AxiosData<T> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
}

export interface AxiosError {
  response: { data: { message: string; statusCode: number } };
  message: string;
}
