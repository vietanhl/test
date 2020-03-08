import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ConfirmBookingButton: React.FunctionComponent = (props: any) => {
  // console.log('CONFIRM - ' + JSON.stringify(props.location.state.treatment));
  // console.log(JSON.stringify(props));
  // console.log(JSON.stringify(props.time));
  return (
    <>
      <Line />
      <Link
        to={{
          pathname: '/confirmation',
          state: {
            treatment: props.location.state.treatment,
            date: props.date,
            time: props.time,
            staff: props.staff,
          },
        }}
      >
        <Button variant="outline-secondary" size="lg">
          Confirm
        </Button>
      </Link>
    </>
  );
};

export default ConfirmBookingButton;
