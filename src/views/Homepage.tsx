import React, { useEffect } from 'react';
import styled from 'styled-components';
import TreatmentButton from '../components/TreatmentButton/TreatmentButton';
import Line from '../components/Line/Line';
// import LoginButton from '../components/LoginButton';
// import LogoutButton from '../components/Logout';
import * as api from '../containers/AvailabilityContainer/AvailabilityContainer';

const Container = styled.div`
  text-align: center;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;
`;

const Homepage = (props: any) => {
  const banner = require('../Images/spa-banner.jpg');
  const steps = require('../Images/steps.png');
  const { isAuthenticated } = props.auth;

  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.getAvailability('2020', '10', '22');
      console.log(res);
    }
    fetchMyApi();
    // console.log(response);
  }, []);

  return (
    <Container>
      <img src={banner} height="50%" width="100%"></img>
      {/* <b>Opening Hours</b> */}
      {/* {OpeningHours} */}
      <TreatmentButton />
      {/* {!isAuthenticated() ? (
        <LoginButton {...props} />
      ) : (
        <LogoutButton {...props} />
      )} */}
      {/* <Calendar /> */}

      <Line />
      <img src={steps} height="50%" width="100%"></img>
      <Line />
    </Container>
  );
};

export default Homepage;
