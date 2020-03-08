import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ConfirmBookingButton from '../ConfirmBookingButton/ConfirmBookingButton';
import Button from 'react-bootstrap/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';

const Calendar: React.FunctionComponent = (props: any) => {
  const [startDate, setStartDate] = useState();
  const [startTime, setStartTime] = useState();
  const [selectedStaff, setSelectedStaff] = useState();
  const [staff, setStaff] = useState({
    employee1: false,
    employee2: false,
    employee3: false,
    employee4: false,
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //TODO: Validation if an employee is already clicked
    setStaff({ ...staff, [name]: event.target.checked });
  };

  useEffect(() => {
    console.log('time: ' + startTime);
    console.log('staff: ' + JSON.stringify(staff));
    var newStaff = { ...staff };
    var newSelectedStaff: any = [];
    Object.entries(newStaff).forEach(entry => {
      if (entry[1] === true) {
        newSelectedStaff.push(entry[0]);
      }
    });
    setSelectedStaff(newSelectedStaff);
  }, [startTime, staff]);
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
              />
            </Grid>
            <Grid item key={0}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={staff.employee1}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleChange('employee1')}
                      value="employee1"
                    />
                  }
                  label="Employee 1"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={staff.employee2}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleChange('employee2')}
                      value="employee2"
                    />
                  }
                  label="Employee 2"
                />
              </FormGroup>
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
