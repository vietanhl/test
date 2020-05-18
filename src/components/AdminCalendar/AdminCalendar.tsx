import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as api from '../../containers/AdminCalendarContainer/AdminCalendarContainer';
import Modal from '../Modal/Modal';
import { Route, Link } from 'react-router-dom';

const AdminCalendar: React.FunctionComponent = (props: any) => {
  const localizer = momentLocalizer(moment);
  const now = new Date();
  const [dateReq, setDateReq] = useState(now.toISOString().substring(10, 0));
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEven, setCurrentEvent] = useState();
  console.log(now);

  const [event, setEvent] = useState([
    {
      id: '15',
      title: '1Treatment',
      start: now,
      end: now,
      employee: 'test',
    },
  ]);

  useEffect(() => {
    async function fetchMyApi() {
      const response = await api.getAvailability(dateReq);
      if (
        response === undefined ||
        response === null ||
        response.length === 0
      ) {
        return null;
      } else {
        console.log('data');
        const res = Object.keys(response).map((i: any) => {
          return response[i];
        });

        const eventsMapped = res.map((booking: any) => {
          return {
            id: booking.ID,
            title: `${booking.EmployeeName} - Client: ${booking.Clients.FirstName} Treatment: ${booking.TreatmentNames}`,
            start: new Date(booking.StartTime),
            end: new Date(booking.EndTime),
            employee: booking.EmployeeId,
            firstName: booking.Clients.FirstName,
            lastName: booking.Clients.LastName,
            email: booking.Clients.Email,
            phone: booking.Clients.Phone,
            treatmentId: booking.TreatmentId,
            notes: booking.Notes,
            treatmentName: booking.TreatmentNames,
            date: new Date(booking.StartTime).toISOString().substring(10, 0),
          };
        });
        setEvent(eventsMapped);
      }
    }
    fetchMyApi();
  }, [dateReq]);

  //MODAL + EVENT

  const eventClicked = (bookingInfo: any) => {
    console.log('clicked' + JSON.stringify(bookingInfo));

    props.parentCallBack(bookingInfo);

    // setCurrentEvent(bookingInfo);
    // setModalOpen(true);
    // openModal();
    // window.open(`http://localhost:3000/edit-booking/${bookingInfo.ID}`);
  };

  useEffect(() => {
    if (modalOpen === true) {
    }
  }, [modalOpen]);
  return (
    <div style={{ height: '800px', width: '1000px', fontSize: '10px' }}>
      <Calendar
        localizer={localizer}
        events={event}
        startAccessor="start"
        endAccessor="end"
        defaultDate={moment().toDate()}
        defaultView="day"
        dayLayoutAlgorithm="overlap"
        // timeslots={2}
        timeslots={5}
        // toolbar={false}
        formats={{ dateFormat: 'D', weekdayFormat: 'dddd' }}
        // showMultiDayTimes={true}
        min={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            9
          )
        }
        max={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate(),
            18
          )
        }
        step={12}
        eventPropGetter={(event: any) => ({
          style: {
            backgroundColor:
              event.employee !== '5eb603958451d805f9e3215e'
                ? '#3174ad'
                : '#ad4ca4',
            width: '10%',
          },
        })}
        onNavigate={(date, view) => {
          setDateReq(date.toISOString().substring(10, 0));
        }}
        onSelectEvent={(event) => eventClicked(event)}
      />
    </div>
  );
};

export default AdminCalendar;
