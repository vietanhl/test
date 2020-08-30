import axios from 'axios';
import * as endpoints from '../../Api/endpoints';

export const getAllEmployees = async () => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .get(`${endpoints.employee}`)
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

export const EditEmployee = async (id: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .post(`${endpoints.employee}/${id}`, {
        //BODY of request here
      })
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

export const deleteEmployee = async (id: string) => {
  var response: any = null;
  const fetchData = async () => {
    await axios
      .delete(`${endpoints.employee}/${id}`)
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
