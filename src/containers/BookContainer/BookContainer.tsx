import axios from 'axios';
import * as endpoints from '../../Api/endpoints';
import { useState, useEffect } from 'react';

export const getBooking = (id: any) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${endpoints.book}/AppointmentId/${id}`);
      setData(result.data);
    };
    fetchData();
  }, [id]);
  return data;
};

export const createBooking = (year: any, month: any, day: any) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .post(`${endpoints.book}/date/${year}/${month}/${day}/book`, {
        appointmentDetailsId: 0,
        clientAccountId: 0,
        clientAccount: {
          clientAccountId: 0,
          firstName: 'string',
          lastName: 'string',
          email: 'string',
          contactNumber: 'string',
          appointments: [null],
        },
        dateTimeKeyId: 'string',
        dateTimeKey: {
          dateTimeKeyId: 'string',
          date: '2020-03-14T19:55:49.308Z',
          appointments: [null],
        },
        employeeId: 0,
        employee: {
          employeeId: 0,
          employeName: 'string',
          email: 'user@example.com',
          appointments: [null],
          employeeTreatments: [
            {
              employeeId: 0,
              treatmentId: 0,
            },
          ],
          workschedule: [
            {
              employeeId: 0,
              operatingTimeId: 0,
              operatingTime: {
                id: 0,
                day: 'string',
                startTime: {},
                endTime: {},
                isOpen: true,
                employees: [null],
              },
            },
          ],
        },
        treatmentId: 0,
        treatment: {
          treatmentId: 0,
          treatmentType: 0,
          treatmentName: 'string',
          price: 0,
          duration: 0,
          employeeTreatments: [
            {
              employeeId: 0,
              treatmentId: 0,
            },
          ],
          appointments: [null],
        },
        reservation: {
          reservationId: 0,
          startTime: '2020-03-14T19:55:49.308Z',
          endTime: '2020-03-14T19:55:49.308Z',
          appointmentDetailsId: 0,
        },
      })
      .then(
        response => {
          setData(response);
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }, []);
  return data;
};
