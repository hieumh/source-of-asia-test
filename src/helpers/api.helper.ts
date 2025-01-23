import axios, { AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders, CancelTokenSource } from 'axios';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};

const apiTimeOut = 300000;
const baseUrl = import.meta.env.VITE_API_URL || '';

export type TFetchOption<T> = Partial<{
  data: T;
  headers: AxiosRequestHeaders;
  timeout: number;
  method: string;
  responseType: ResponseType;
  cancelToken: CancelTokenSource;
}>;

const fetch = <T>(url: string, {
  data,
  headers,
  timeout,
  method,
  responseType,
  cancelToken
}: TFetchOption<T>): AxiosPromise => {

  const config: AxiosRequestConfig = {
    headers,
    timeout: timeout || apiTimeOut,
    method,
    cancelToken: cancelToken?.token
  };

  if (data) {
    config.data = data;
  }
  const newURL =/^https?:\/\//.test(url) ? url : baseUrl + url;
  return axios(newURL, config);
}

export const ApiHelper = {
  get: <T>(url: string, options: TFetchOption<T> = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.GET }),
  post: <T>(url: string, options: TFetchOption<T> = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.POST }),
  put: <T>(url: string, options: TFetchOption<T> = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.PUT }),
  patch: <T>(url: string, options: TFetchOption<T> = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.PATCH }),
  delete: <T>(url: string, options: TFetchOption<T> = {}): AxiosPromise =>
    fetch<T>(url, { ...options, method: HTTP_METHODS.DELETE })
};
