import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmBookingButton from '../ConfirmBookingButton/ConfirmBookingButton';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';

const Calendar: React.FunctionComponent = (props: any) => {
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [selectedStaff, setSelectedStaff] = useState();
  console.log(props);

  var today = new Date();
  var timeAvailable = [
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
  ];

  return (
    <>
      <p>{today.toDateString()}</p>
      <Grid container>
        <Grid item xs={12} alignContent="space-between">
          <Grid container justify="center" spacing={10}>
            <Grid item key={0}>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                inline
                minDate={new Date()}
                showDisabledMonthNavigation
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid item key={0}>
        {timeAvailable.map((timeSlot: any) => {
          return (
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setStartTime(timeSlot)}
            >
              {timeSlot}
            </Button>
          );
        })}
      </Grid>
      <ConfirmBookingButton
        date={startDate}
        time={startTime}
        staff={selectedStaff}
        {...props}
      />
    </>
  );
};

export default Calendar;
