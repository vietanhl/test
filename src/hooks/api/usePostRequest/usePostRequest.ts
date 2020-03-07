import { post } from '../../../Api/utils';

const usePostRequest = <RequestType, ResponseType = {}>(
  url: string,
  headerOverides: Record<string, string> = {}
) => {
  const request = async (data: RequestType, path?: string) => {
    const maybePath = path ? `/${path}` : '';

    try {
      const response = await post<RequestType, ResponseType>(
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

export default usePostRequest;
