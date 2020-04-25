import axios from 'axios';
import * as endpoints from '../../Api/endpoints';
import { baseURL } from '../../config/merchantConfig/config';

export const getTreatments = async () => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.treatment}`)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log(error);
        return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();
  return response;
};
