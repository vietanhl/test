import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';

const BookButton: React.FunctionComponent = () => {
  return (
    <div>
      <Line />
      <Button variant="outline-secondary" size="lg" href="/book">
        Book Now
      </Button>
    </div>
  );
};

export default BookButton;
