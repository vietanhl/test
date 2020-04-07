import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const TreatmentButton: React.FunctionComponent = () => {
  return (
    <>
      <Line />
      <Link
        to={{
          pathname: '/treatment',
        }}
      >
        <Button variant="outline-secondary" size="lg">
          Find your treatment
        </Button>
      </Link>
    </>
  );
};

export default TreatmentButton;
