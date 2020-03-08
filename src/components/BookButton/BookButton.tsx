import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BookButton: React.FunctionComponent = (props: any) => {
  console.log('treatment: ' + JSON.stringify(props));
  return (
    <>
      <Line />
      <Link
        to={{
          pathname: '/book',
          state: { ...props },
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
