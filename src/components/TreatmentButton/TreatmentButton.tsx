import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';

const TreatmentButton: React.FunctionComponent = () => {
  return (
    <div>
      <Line />
      <Button variant="outline-secondary" size="lg" href="/treatment">
        Find your treatment
      </Button>
    </div>
  );
};

export default TreatmentButton;
