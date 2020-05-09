import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../containers/BookContainer/BookContainer';
import styled from 'styled-components';

const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;

  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 20px;

  &:hover {
    color: #282c34;
  }
`;

const OrderButton: React.FunctionComponent = (props: any) => {
  const isDisabled = () => {
    if (
      props.location.state.time === undefined ||
      props.location.state.time === null
    ) {
      return true;
    } else if (
      props.form.firstName === undefined ||
      props.form.firstName === null ||
      props.form.firstName === ''
    ) {
      return true;
    } else if (
      props.form.email === undefined ||
      props.form.email === null ||
      props.form.email === ''
    ) {
      return true;
    } else if (
      props.form.phone === undefined ||
      props.form.phone === null ||
      props.form.phone === ''
    ) {
      return true;
    } else if (props.form.terms === false) {
      return true;
    } else if (!validateEmail(props.form.email)) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert('You have entered an invalid email address!');
    return false;
  };

  const bookAppointment = () => {
    const year = props.location.state.date.split('-')[0];
    const month = props.location.state.date.split('-')[1];
    const day = props.location.state.date.split('-')[2];
    api.createBooking(
      year,
      month,
      day,
      props.location.state.treatmentId,
      props.location.state.time,
      props.form.firstName,
      props.form.lastName,
      props.form.email,
      props.form.phone,
      props.form.comments
    );
    // Assertion on this response if successful.
  };

  return (
    <>
      <ContainerUl>
        <ContainerLi>
          {' '}
          <Link
            to={{
              pathname: '/book',
              state: {
                firstName: props.form.firstName,
                lastName: props.form.lastName,
                email: props.form.email,
                phone: props.form.phone,
                comments: props.form.comments,
                treatment: props.location.state.treatmentId,
                date: props.location.state.date,
                time: props.location.state.time,
                treatmentName: props.location.state.treatmentName,
              },
            }}
          >
            <Button variant="outline-secondary" size="lg">
              Back
            </Button>
          </Link>
        </ContainerLi>
        <ContainerLi>
          <Link
            to={{
              pathname: '/order',
              state: {
                firstName: props.form.firstName,
                lastName: props.form.lastName,
                email: props.form.email,
                phone: props.form.phone,
                comments: props.form.comments,
                treatment: props.location.state.treatmentId,
                date: props.location.state.date,
                time: props.location.state.time,
                treatmentName: props.location.state.treatmentName,
              },
            }}
          >
            <Button
              variant="outline-secondary"
              size="lg"
              onClick={bookAppointment}
              disabled={isDisabled()}
            >
              Next
            </Button>
          </Link>
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default OrderButton;
