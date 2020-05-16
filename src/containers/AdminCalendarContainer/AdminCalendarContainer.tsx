import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getAvailability = async (date: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .get(`${endpoints.bookedAppointments}/${date}`)
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log('error ' + error);
      });
  };
  await fetchData();
  return response;
};
