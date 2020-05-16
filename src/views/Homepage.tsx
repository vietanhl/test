import React from 'react';
import TreatmentButton from '../components/TreatmentButton/TreatmentButton';
import Line from '../components/Line/Line';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
// import AdminCalendar from 'components/AdminCalendar';
// import AdminCalendar from '../components/AdminCalendar/AdminCalendar';

const Homepage = (props: any) => {
  const banner = require('../Images/spa-banner.jpg');
  const steps = require('../Images/steps.png');
  const auth = new Auth(props.history);
  const { isAuthenticated } = props.auth;

  return (
    <>
      <Menu auth={auth} {...props} />
      {/* <AdminCalendar /> */}
      <img src={banner} height="50%" width="100%" alt="banner"></img>
      <TreatmentButton />
      {/* {!isAuthenticated() ? (
        <LoginButton {...props} />
      ) : (
        <LogoutButton {...props} />
      )} */}
      <Line />
      <img src={steps} height="50%" width="100%" alt="process"></img>
      <Line />
    </>
  );
};

export default Homepage;
