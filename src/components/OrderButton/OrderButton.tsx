import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../containers/BookContainer/BookContainer';

const OrderButton: React.FunctionComponent = (props: any) => {
  // console.log('ORDER BUTTON: ' + JSON.stringify(props.children.location.state));
  console.log('Form from order: ' + JSON.stringify(props));
  console.log('ORDER ' + JSON.stringify(props.location.state));

  const bookAppointment = () => {
    const year = props.location.state.date.split('-')[0];
    const month = props.location.state.date.split('-')[1];
    const day = props.location.state.date.split('-')[2];
    api.createBooking(
      year,
      month,
      day,
      props.location.state.treatmentId,
      props.location.state.time,
      props.form.firstName,
      props.form.lastName,
      props.form.email,
      props.form.phone
    );
    // Assertion on this response if successful.
  };

  return (
    <>
      <Link
        to={{
          pathname: '/order',
          state: {
            firstName: props.form.firstName,
            lastName: props.form.lastName,
            email: props.form.email,
            phone: props.form.phone,
            comments: props.form.comments,
            treatment: props.location.state.treatmentId,
            date: props.location.state.date,
            time: props.location.state.time,
            treatmentName: props.location.state.treatmentName,
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
