import { useEffect } from 'react';
import useFetchRequest from './../useFetchRequest';
import { UseFetchRequestOptions } from '../useFetchRequest/useFetchRequest';

interface UseFetchDataAndDispatch<T> {
  urls: string[];
  deps?: any[];
  dispatch: React.Dispatch<any>;
  options?: UseFetchRequestOptions;
}

const UseFetchDataAndDispatch = <T extends any>({
  urls,
  deps = [],
  dispatch,
  options,
}: UseFetchDataAndDispatch<T>) => {
  const { loading, data, error } = useFetchRequest<T>(urls, deps, options);

  useEffect(() => {
    if (data && !error) {
      dispatch({
        type: 'DATA_LOADED',
        payload: data,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (error) {
      dispatch({
        type: 'DATA_ERROR',
        payload: error,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return { loading, data, error };
};

export default UseFetchDataAndDispatch;
