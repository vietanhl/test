import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const OrderButton: React.FunctionComponent = (props: any) => {
  // console.log('ORDER BUTTON: ' + JSON.stringify(props.children.location.state));
  console.log('Form from order: ' + JSON.stringify(props.children));
  console.log('ORDER ' + JSON.stringify(props.location.state));
  const firstName = props.children.firstName;
  const lastName = props.children.lastName;
  const email = props.children.email;
  const phone = props.children.phone;
  const comments = props.children.comments;
  const treatment = props.location.state.treatment;
  const date = props.location.state.date;
  const time = props.location.state.time;
  const staff = props.location.state.staff;

  return (
    <>
      <Link
        to={{
          pathname: '/order',
          state: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            comments: comments,
            treatment: treatment,
            date: date,
            time: time,
            staff: staff,
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

export default OrderButton;
