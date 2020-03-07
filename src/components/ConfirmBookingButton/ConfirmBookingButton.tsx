import React from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';

const ConfirmBookingButton: React.FunctionComponent = (props: any) => {
  return (
    <div>
      <Line />
      <Button
        variant="outline-secondary"
        size="lg"
        href="/confirmation"
        {...props}
      >
        Confirm
      </Button>
    </div>
  );
};

export default ConfirmBookingButton;
