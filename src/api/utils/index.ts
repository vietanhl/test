import axios, { AxiosRequestConfig } from 'axios';

export const get = async <ResponseType>(
  url: string,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await axios.get<ResponseType>(url, config);
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const post = <RequestType, ResponseType>(
  url: string,
  data: RequestType,
  config?: AxiosRequestConfig
) => {
  return axios.post<ResponseType>(url, data, config);
};

export const del = (url: string, config?: AxiosRequestConfig) => {
  return axios.delete(url, config);
};

export const put = <RequestType, ResponseType>(
  url: string,
  data: RequestType,
  config?: AxiosRequestConfig
) => {
  return axios.put<ResponseType>(url, data, config);
};
