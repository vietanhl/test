import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getBooking = async (id: any) => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.book}/AppointmentId/${id}`)
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

export const createBooking = async (
  year: string,
  month: string,
  day: string,
  treatmentIds: any,
  startTime: string,
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: string
) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .post(`${endpoints.book}/date/${year}/${month}/${day}/book`, {
        treatmentIds: treatmentIds,
        startTime: startTime,
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNumber: contactNumber,
      })
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
