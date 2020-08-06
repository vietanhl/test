import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PageTitle from '../PageTitle';
import * as api from '../../containers/BookContainer/BookContainer';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TreatmentList from '../../components/ServiceList';

interface State extends React.Props<any> {
  id: string;
  title: string;
  start: string;
  end: string;
  employee: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  treatmentId: string;
  notes: string;
  treatmentName: string;
  bookingId: string;
  date: string;
}
const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;

  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 20px;

  &:hover {
    color: #282c34;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 500,
      },
      input: {
        fontFamily: 'Abril Fatface',
      },
    },
  })
);

const Modal: React.FunctionComponent = (event: any, props: any) => {
  const [booking, setBooking]: any = useState({});
  const classes = useStyles();
  const [values, setValues]: any = React.useState<State>({
    id: '',
    title: '',
    start: '',
    end: '',
    employee: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    treatmentId: '',
    notes: '',
    treatmentName: '',
    bookingId: '',
    date: '',
  });
  const [treatmentId, setTreatmentId] = useState();
  // const [treatmentName, setTreatmentName] = useState();

  const treatmentSelected = (treatmentId: any, treatmentName: any) => {
    setTreatmentId(treatmentId);
    // setTreatmentName(treatmentName);
    // console.log(treatmentName);
  };

  useEffect(() => {
    var correctBooking = { ...event.event };
    correctBooking.start = correctBooking.start
      ?.toISOString()
      .substring(11, 16);
    correctBooking.end = correctBooking.end?.toISOString().substring(11, 16);
    console.log(correctBooking);
    // setBooking(event.event);
    setBooking(correctBooking);

    // PRE-SELECT treatments
    console.log(correctBooking.treatmentId);
    console.log(correctBooking.treatmentName);
  }, [event]);
  useEffect(() => {
    console.log(booking);
    const mapBooking = () => {
      if (booking === undefined || booking === null || booking.length === 0) {
        return null;
      } else {
        setValues(booking);
      }
    };
    mapBooking();
  }, [booking]);
  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const processBooking = () => {
    const mappedDetails = {
      client: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      },
      treatmentId: treatmentId,
      notes: values.notes,
      date: values.date,
      startTime: values.start,
      endTime: values.end,
    };
    api.processBooking(mappedDetails);
    successProcessBookingAlert();
  };

  const updateBooking = () => {
    console.log('updateBooking');

    const mappedDetails = {
      client: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone,
      },
      treatmentId: treatmentId,
      notes: values.notes,
      date: values.date,
      startTime: values.start,
      endTime: values.end,
    };
    console.log('booking ID' + values.id);
    api.updateBooking(mappedDetails, values.id);
    succesAlert();
    console.log(typeof mappedDetails.startTime);
    console.log('mapped: ' + JSON.stringify(mappedDetails));
  };

  const deleteBooking = () => {
    console.log('deleteBooking');
    succesAlert();
    api.deleteBooking(values.id);
  };
  useEffect(() => {
    console.log('BOOKING' + JSON.stringify(booking));
    console.log(booking.treatmentId);
    // console.log(booking.treatmentName);
    //  console.log('MODAL EVENT' + JSON.stringify(event));
  }, [event, booking]);
  // useEffect(() => {
  //   console.log(booking);
  // }, [event]);
  const deleteIsDisabled = () => {
    // console.log('value' + values.id);
    // console.log('booking' + booking.id);
    if (
      values.id === undefined
      // values.title === '' ||
      // values.start === '' ||
      // values.end === '' ||
      // values.employee === '' ||
      // values.firstName === '' ||
      // values.lastName === '' ||
      // values.email === '' ||
      // values.phone === '' ||
      // values.treatmentId === '' ||
      // values.notes === '' ||
      // values.treatmentName === '' ||
      // values.bookingId === '' ||
      // values.date === ''
      // booking === {}
    ) {
      return true;
    } else {
      return false;
    }
  };

  const succesAlert = () => {
    toast.success(`✔ please refresh to display changes`);
  };

  const successProcessBookingAlert = () => {
    toast.success(`✔ booking processed`);
  };

  const updateBookingIsDisabled = () => {
    if (values.id === undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <PageTitle title="Manage Booking " />
      <p>To edit a booking, please click on the calendar event</p>
      <p>
        Note: please keep the same format as displayed for a successful update
      </p>
      <ContainerUl>
        <ContainerLi>
          <Button
            variant="outline-success"
            size="lg"
            onClick={processBooking}
            disabled={updateBookingIsDisabled()}
          >
            Process booking
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={updateBooking}
            disabled={updateBookingIsDisabled()}
          >
            Update booking
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={deleteBooking}
            disabled={deleteIsDisabled()}
          >
            Delete booking
          </Button>
        </ContainerLi>
      </ContainerUl>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="first-name"
          label="First name"
          value={values.firstName}
          onChange={handleChange('firstName')}
        />
        <TextField
          required
          id="last-name"
          label="Last name"
          value={values.lastName}
          onChange={handleChange('lastName')}
        />
      </form>
      <form className={classes.root}>
        <TextField
          required
          id="email"
          label="Email address"
          value={values.email}
          onChange={handleChange('email')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="phone"
          label="Phone number"
          value={values.phone}
          onChange={handleChange('phone')}
        />
      </form>
      {/* ADDING */}
      {/* <form className={classes.root} noValidate>
        <TextField
          required
          id="treatmentId"
          label="Treatment ID"
          value={values.treatmentId}
          onChange={handleChange('treatmentId')}
        />
      </form> */}
      <form className={classes.root} noValidate>
        <TextField
          required
          id="date"
          label="Date"
          value={values.date}
          onChange={handleChange('date')}
        />
      </form>
      <form className={classes.root} noValidate>
        <TextField
          required
          id="start"
          label="Start Time"
          value={values.start}
          onChange={handleChange('start')}
        />
      </form>
      {/* <form className={classes.root} noValidate>
        <TextField
          required
          id="end"
          label="End Time"
          value={values.end}
          onChange={handleChange('end')}
        />
      </form> */}
      {/* ADDING */}
      <form className={classes.root} noValidate>
        <TextField
          id="comments"
          label="Comments"
          multiline
          rows="4"
          variant="outlined"
          value={values.notes}
          onChange={handleChange('notes')}
        />
      </form>
      <p>Treatments must be selected to update the booking</p>
      <TreatmentList
        preSelectTreatmentName={booking.treatmentName}
        preSelectedTreatmentId={booking.treatmentId}
        parentCallBack={treatmentSelected}
        {...props}
      />
      <ContainerUl>
        <ContainerLi>
          <Button variant="outline-success" size="lg" onClick={processBooking}>
            Process booking
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={updateBooking}
            disabled={updateBookingIsDisabled()}
          >
            Update booking
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={deleteBooking}
            disabled={deleteIsDisabled()}
          >
            Delete booking
          </Button>
        </ContainerLi>
      </ContainerUl>
      <ToastContainer />
    </div>
  );
};

export default Modal;
