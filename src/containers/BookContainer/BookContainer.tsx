import axios from 'axios';
import * as endpoints from '../../Api/endpoints';
import { baseURL } from '../../config/merchantConfig/config';

export const getBooking = async (id: any) => {
  var response: any = null;

  const fetchData = async () => {
    await axios
      .get(`${endpoints.book}/AppointmentId/${id}`)
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

export const createBooking = async (
  year: string,
  month: string,
  day: string,
  treatmentIds: any,
  startTime: string,
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: string,
  comments: string
) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .post(`${endpoints.book}`, {
        client: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: contactNumber,
        },
        treatmentId: treatmentIds,
        date: `${year}-${month}-${day}`,
        startTime: `${startTime}`,
        notes: comments,
      })
      .then((res) => {
        response = JSON.stringify(res.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();

  return response;
};

export const updateBooking = async (payload: any, bookingId?: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .put(`${endpoints.book}/${bookingId}`, payload)
      .then((res) => {
        response = JSON.stringify(res.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();

  return response;
};
export const deleteBooking = async (bookingId?: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .delete(`${endpoints.book}/${bookingId}`)
      .then((res) => {
        response = JSON.stringify(res.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // return window.location.replace(`${baseURL}/error`);
      });
  };
  await fetchData();

  return response;
};
