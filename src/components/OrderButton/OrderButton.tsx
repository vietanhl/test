import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../containers/BookContainer/BookContainer';

const OrderButton: React.FunctionComponent = (props: any) => {
  // console.log('ORDER BUTTON: ' + JSON.stringify(props.children.location.state));
  console.log('Form from order: ' + JSON.stringify(props.children));
  console.log('ORDER ' + JSON.stringify(props.location.state));
  const firstName = props.children.firstName;
  const lastName = props.children.lastName;
  const email = props.children.email;
  const phone = props.children.phone;
  const comments = props.children.comments;
  const treatment = props.location.state.treatment;
  const date = props.location.state.date;
  const time = props.location.state.time;
  const treatmentName = props.location.state.treatmentName;

  const bookAppointment = () => {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    var x = api.createBooking(
      year,
      month,
      day,
      treatment,
      time,
      firstName,
      lastName,
      email,
      phone
    );
    // Assertion on this response if successful.
    console.log(x);
    console.log(
      year,
      month,
      day,
      treatment,
      time,
      firstName,
      lastName,
      email,
      phone
    );
  };

  return (
    <>
      <Link
        to={{
          pathname: '/order',
          state: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            comments: comments,
            treatment: treatment,
            date: date,
            time: time,
            treatmentName: treatmentName,
          },
        }}
      >
        <Button variant="outline-secondary" size="lg" onClick={bookAppointment}>
          Book Now
        </Button>
      </Link>
    </>
  );
};

export default OrderButton;
