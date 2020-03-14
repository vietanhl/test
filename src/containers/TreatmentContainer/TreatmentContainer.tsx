import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getTreatments = async () => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.treatment}`)
      .then(res => {
        response = JSON.stringify(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  await fetchData();
  return response;
};
