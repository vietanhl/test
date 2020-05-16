import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as api from '../../containers/AdminCalendarContainer/AdminCalendarContainer';

const AdminCalendar: React.FunctionComponent = (props: any) => {
  const localizer = momentLocalizer(moment);
  const now = new Date();
  const [dateReq, setDateReq] = useState(now.toISOString().substring(10, 0));

  const [event, setEvent] = useState([
    {
      id: 15,
      title: '1Treatment',
      start: now,
      end: now,
      employee: 'test',
    },
  ]);

  //add loading state

  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getAvailability(dateReq);
      const eventsMapped = res.map((booking: any) => {
        return {
          id: parseInt(booking.ID),
          title: booking.Info.Client.FirstName,
          start: new Date(booking.Info.StartTime),
          end: new Date(booking.Info.EndTime),
          employee: booking.EmployeeId,
        };
      });
      setEvent(eventsMapped);
    }
    fetchMyApi();
  }, [dateReq]);

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
          // console.log('#### date=', date.toISOString().substring(10, 0));
          // console.log('#### view=', view);
          setDateReq(date.toISOString().substring(10, 0));
        }}
      />
    </div>
  );
};

export default AdminCalendar;
