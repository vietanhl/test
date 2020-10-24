import React from 'react';
import TreatmentButton from '../components/TreatmentButton/TreatmentButton';
import Line from '../components/Line/Line';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';

const Homepage = (props: any) => {
  const banner = require('../Images/spa-banner.jpg');
  const steps = require('../Images/steps.png');
  const auth = new Auth(props.history);  

  return (
    <> 
      <Menu auth={auth} {...props} />   
      <img src={banner} height="50%" width="100%" alt="banner"></img>  
      <TreatmentButton />
      <Line />
      <img src={steps} height="50%" width="100%" alt="process"></img>
      <Line />
    </>
  );
};

export default Homepage;
