import React, { useEffect } from 'react';
import styled from 'styled-components';
import TreatmentButton from '../components/TreatmentButton/TreatmentButton';
import Line from '../components/Line/Line';
import AdminCalendar from '../components/AdminCalendar/AdminCalendar';
//import * as api from '../containers/AvailabilityContainer/AvailabilityContainer';

// const Container = styled.div`
//   text-align: center;
//   list-style: none;
//   font-family: 'Courier New', Courier, monospace;
// `;

const Homepage = (props: any) => {
  const banner = require('../Images/spa-banner.jpg');
  const steps = require('../Images/steps.png');
  const { isAuthenticated } = props.auth;

  return (
    <>
      {/* <AdminCalendar /> */}
      <img src={banner} height="50%" width="100%"></img>
      <TreatmentButton />
      {/* {!isAuthenticated() ? (
        <LoginButton {...props} />
      ) : (
        <LogoutButton {...props} />
      )} */}
      <Line />
      <img src={steps} height="50%" width="100%"></img>
      <Line />
    </>
  );
};

export default Homepage;
