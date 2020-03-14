import React from 'react';
import PageTitle from '../components/PageTitle';

const Order: React.FunctionComponent = (props: any) => {
  //TODO: Validation if props are not there
  console.log('PROPS: ' + JSON.stringify(props.location.state));
  const property = props.location.state;
  const firstName = property.firstName;
  const lastName = property.lastName;
  const email = property.email;
  const phone = property.phone;
  const comments = property.comments;
  const treatment = property.treatment;
  const date = property.date.toString();
  const time = property.time;
  const staff = property.staff;
  //Price total

  return (
    <>
      <PageTitle title={`Enjoy your treatment ${firstName}!`} />
      <h1>Order Summary</h1>
      <h4>Appointment</h4>
      <p>
        {time} - {date}
      </p>
      <h4>Treatment</h4>
      <p>{treatment}</p>
      <h4>Staff</h4>
      <p>{staff}</p>
      <h4>Phone</h4>
      <p>{phone}</p>
      <h4>Comments</h4>
      <p>{comments}</p>
      <p>Confirmation has been sent to your email {email}</p>
    </>
  );
};

export default Order;
