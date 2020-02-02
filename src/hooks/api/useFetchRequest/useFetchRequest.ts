import { useEffect, useState, useRef, useCallback } from 'react';
import { get } from '../../../api/utils';
import Axios, { Canceler, AxiosError } from 'axios';

const wait = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const DEFAULT_API_DELAY = 750;

export type UseFetchRequestOptions = {
  delay?: boolean;
  run?: boolean;
};

const useFetchRequest = <ResponseType>(
  url: string | string[],
  dependencies: any[] = [],
  { delay = false, run = true }: UseFetchRequestOptions = {}
) => {
  const [data, setData] = useState<ResponseType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);
  const cancelQueue = useRef<Canceler[]>([]);

  const isMounted = useRef(true);

  const CancelToken = Axios.CancelToken;
  const source = CancelToken.source();

  const request = async () => {
    try {
      setLoading(true);
      setError(null);

      let data: ResponseType | null = null;

      let requestPromise;

      if (Array.isArray(url)) {
        requestPromise = Promise.all(
          url.map(u => {
            return get(u, {
              cancelToken: source.token,
            });
          })
        );
      } else {
        requestPromise = get<ResponseType>(url, {
          cancelToken: source.token,
        });
      }

      if (delay) {
        const [response] = await Promise.all([
          requestPromise,
          wait(DEFAULT_API_DELAY),
        ]);
        data = response as ResponseType;
      } else {
        data = (await requestPromise) as ResponseType;
      }

      if (isMounted.current) {
        setData(data);
        setLoading(false);
      }
    } catch (e) {
      if (!Axios.isCancel(e) && isMounted.current) {
        setError(e);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (run) {
      request();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const prevCancel = cancelQueue.current.pop();

    if (prevCancel) {
      prevCancel();
    }

    cancelQueue.current.push(source.cancel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data,
    loading,
    error,
    request: useCallback(request, [url]),
  };
};

export default useFetchRequest;
