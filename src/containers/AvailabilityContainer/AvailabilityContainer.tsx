import axios from 'axios';
import * as endpoints from '../../Api/endpoints';
import { baseURL } from '../../config/merchantConfig/config';

export const getAvailability = async (year: any, month: any, day: any) => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.availability}/${year}/${month}/${day}`)
      .then((res) => {
        response = JSON.stringify(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  await fetchData();
  return response;
};

export const getAvailabilityByTreatment = async (date: string, id: any) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .post(`${endpoints.availability}/date/treatments`, {
        treatments: id,
        date: date,
      })
      .then((res) => {
        response = res.data;
      })
      .catch((error) => {
        console.log('error: ' + error);
        return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();
  return response;
};
