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

export interface QueryOptions {
  showSuccess?: boolean;
  showError?: boolean;
  enabled?: boolean;
}

export interface QueryParams<T> extends QueryOptions {
  params?: T;
}

export interface QueryBody<T> extends QueryOptions {
  body?: T;
}

export interface QueryId extends QueryOptions {
  id?: string;
}

export type SuccessResponse = AxiosData<null>;
