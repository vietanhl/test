import React from 'react';
import PageTitle from '../components/PageTitle';

const Order: React.FunctionComponent = (props: any) => {
  //TODO: Validation if props are not there

  return (
    <>
      <PageTitle
        title={`Enjoy your treatment ${props.location.state.firstName}!`}
      />
      <h4>Appointment</h4>
      <p>
        {props.location.state.time} - {props.location.state.date}
      </p>
      <h4>Treatment</h4>
      <p>{props.location.state.treatmentName}</p>
      <h4>Phone</h4>
      <p>{props.location.state.phone}</p>
      <h4>Comments</h4>
      <p>{props.comments}</p>
      <p>
        Confirmation has been sent to your email {props.location.state.email}
      </p>
    </>
  );
};

export default Order;
