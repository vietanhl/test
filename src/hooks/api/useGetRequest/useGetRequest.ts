import axios, { AxiosRequestConfig } from 'axios';
import { useCallback } from 'react';

const useGetRequest = <ResponseType extends {}>() => {
  const request = async <T extends ResponseType>(
    url: string,
    headerOverides: any = {},
    options?: AxiosRequestConfig
  ) => {
    return axios.get<T>(url);
  };

  return useCallback(request, []);
};

export default useGetRequest;
