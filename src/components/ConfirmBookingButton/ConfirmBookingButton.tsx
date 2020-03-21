import React, { useEffect } from 'react';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ConfirmBookingButton: React.FunctionComponent = (props: any) => {
  // console.log('CONFIRM - ' + JSON.stringify(props.location.state.treatment));
  // console.log('confirm button ' + JSON.stringify(props.location.state));
  // console.log(JSON.stringify(props.time));
  useEffect(() => {
    console.log('Confirm button: ' + JSON.stringify(props));
    console.log('TREATMENT ID -' + props.treatmentId);
  }, [props]);
  const bookAppointment = () => {
    //call api
  };
  return (
    <>
      <Line />
      <Link
        to={{
          pathname: '/confirmation',
          state: {
            treatmentId: props.treatmentId,
            date: props.date,
            time: props.time,
            treatmentName: props.treatmentName,
          },
        }}
      >
        <Button variant="outline-secondary" size="lg" onClick={bookAppointment}>
          Confirm
        </Button>
      </Link>
    </>
  );
};

export default ConfirmBookingButton;
