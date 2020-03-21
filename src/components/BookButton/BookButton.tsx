import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BookButton: React.FunctionComponent = (props: any) => {
  return (
    <>
      <Line />
      <Link
        to={{
          pathname: '/book',
          state: {
            treatmentId: props.treatmentId,
            treatmentName: props.treatmentName,
          },
        }}
      >
        <Button variant="outline-secondary" size="lg">
          Book Now
        </Button>
      </Link>
    </>
  );
};

export default BookButton;
