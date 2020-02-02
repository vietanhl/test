import React from 'react';
import styled from 'styled-components';
// import OpeningHours from '../containers/openingHours/OpeningHoursContainer';
import Calendar from '../components/Calendar/Calendar';
import TreatmentButton from '../components/TreatmentButton/TreatmentButton';
import Line from '../components/Line/Line';

const Container = styled.div`
  text-align: center;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;
`;

// const ContainerUl = styled.ul`
//   text-align: center;
//   list-style: none;
//   font-family: 'Courier New', Courier, monospace;
//   font-size: calc(15px + 1vmin);
//   padding-top: 0px;
// `;

// const ContainerLi = styled.li`
//   display: inline;
//   padding-right: 150px;
//   padding-left: 50px;
// `;
// const ContainerLi2 = styled.li`
//   display: inline;
//   padding-right: 160px;
// `;
// const ContainerLi3 = styled.li`
//   display: inline;
//   padding-right: 130px;
// `;
const Homepage = () => {
  const banner = require('../Images/spa-banner.jpg');
  const steps = require('../Images/steps.png');
  return (
    <Container>
      <img src={banner} height="50%" width="100%"></img>
      {/* <b>Opening Hours</b> */}
      {/* {OpeningHours} */}
      <TreatmentButton />
      {/* <Calendar /> */}

      <Line />
      <img src={steps} height="50%" width="100%"></img>
      <Line />
      {/* <ContainerUl>
        <ContainerLi>Find your treatment</ContainerLi>
        <ContainerLi2> Book a time</ContainerLi2>
        <ContainerLi3>Visit & Enjoy!</ContainerLi3>
      </ContainerUl> */}
    </Container>
  );
};

export default Homepage;
