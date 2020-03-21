import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';
import * as api from '../../containers/AvailabilityContainer/AvailabilityContainer';

const Calendar: React.FunctionComponent<any> = (props: any) => {
  console.log('CALENDAR - ' + JSON.stringify(props));
  console.log('CALENDAR - ' + props.treatmentId);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [startTime, setStartTime] = useState();

  //validation for no available times
  const [availableTime, setAvailableTime] = useState(['No times available']);

  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getAvailabilityByTreatment(
        new Date(startDate).toISOString(),
        props.treatmentId
      );
      if (res.length !== 0) {
        availableTimes(res);
      }
    }
    if (props.treatmentId !== undefined) {
      fetchMyApi();
    }
  }, [startDate, props.treatmentId]);

  useEffect(() => {
    props.parentCallBack(startDate, startTime);
  }, [startDate, startTime]);

  var today = new Date();
  const availableTimes = (res: any) => {
    if (res.length !== 0) {
      const arrayOfTimes = res.map((x: string) => {
        return x.split('T')[1].slice(0, -9);
      });
      setAvailableTime(arrayOfTimes);
      console.log(arrayOfTimes);
    }
  };

  useEffect(() => {
    if (startDate === undefined) {
    } else {
      console.log(new Date(startDate).toISOString().split('T')[0]);
      setStartDate(new Date(startDate).toISOString().split('T')[0]);
    }
  }, [startDate]);

  return (
    <>
      <p>{today.toDateString()}</p>
      <Grid container>
        <Grid item xs={12} alignContent="space-between">
          <Grid container justify="center" spacing={10}>
            <Grid item key={0}>
              <DatePicker
                selected={new Date(startDate)}
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
      <Grid item xs={3} alignContent="center">
        <Grid item key={0}>
          {availableTime.map((timeSlot: any) => {
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
      </Grid>
    </>
  );
};

export default Calendar;
