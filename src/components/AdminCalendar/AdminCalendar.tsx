import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const AdminCalendar: React.FunctionComponent = (props: any) => {
  const localizer = momentLocalizer(moment);
  const now = new Date();
  const events = [
    {
      id: 15,
      title: '1Treatment',
      start: now,
      end: now,
    },
    {
      id: 16,
      title: '2Treatment',
      start: now,
      end: now,
    },
    {
      id: 17,
      title: '3Treatment',
      start: now,
      end: now,
    },
  ];
  return (
    <div style={{ height: '800px', width: '1000px', fontSize: '10px' }}>
      <Calendar
        localizer={localizer}
        events={events}
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
            backgroundColor: event.id === 15 ? '#3174ad' : '#ad4ca4',
            width: '10%',
          },
        })}
      />
    </div>
  );
};

export default AdminCalendar;
