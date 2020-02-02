import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
// import setHours from 'react-datepicker';
// import setMinutes from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar: React.FunctionComponent = () => {
  const [startDate, setStartDate] = useState();
  // setHours(setMinutes(new Date(), 30), 16)
  var today: any = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  today = dd + '/' + mm;
  return (
    <>
      <div>
        <p>{today}</p>
        <DatePicker
          selected={startDate}
          onChange={(date: any) => setStartDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          // injectTimes={[
          //   setHours(setMinutes(new Date(), 1), 0),
          //   setHours(setMinutes(new Date(), 5), 12),
          //   setHours(setMinutes(new Date(), 59), 23),
          // ]}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select an appointment time"
        />
      </div>
    </>
  );
};

export default Calendar;
