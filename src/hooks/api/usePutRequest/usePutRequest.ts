import { put } from '../../../Api/utils';

const usePutRequest = <RequestType, ResponseType = {}>(
  url: string,
  headerOverides: Record<string, string> = {}
) => {
  const request = async (data: RequestType, path?: string) => {
    const maybePath = path ? `/${path}` : '';

    try {
      const response = await put<RequestType, ResponseType>(
        `${url}${maybePath}`,
        data
      );

      return response;
    } catch (error) {
      if (error.response.status === 401) {
        console.log('401');
      }
      throw error;
    }
  };

  return request;
};

export default usePutRequest;
