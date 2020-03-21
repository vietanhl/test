import React, { useEffect } from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BookButton: React.FunctionComponent = (props: any) => {
  useEffect(() => {
    console.log('Book button: ' + JSON.stringify(props));
    console.log('Book button - treatment ID: ' + props.treatmentId);
    console.log('Book button - treatment Name ' + props.treatmentName);
  }, [props]);

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
