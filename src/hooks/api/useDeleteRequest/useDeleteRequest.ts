import { del } from '../../../api/utils';

const useDeleteRequest = (baseUrl: string) => {
  const request = async (path: string) => {
    try {
      const response = await del(`${baseUrl}/${path}`);

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

export default useDeleteRequest;
