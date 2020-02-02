import React from 'react';
import styled from 'styled-components';
import { NavLink, Route } from 'react-router-dom';
// import { Button, ButtonGroup } from 'reactstrap';
import Line from '../Line/Line';
import Button from 'react-bootstrap/Button';
// import ButtonToolBar from 'react-bootstrap/ButtonToolBar';
import ButtonToolbar from 'react-bootstrap/ButtonToolBar';

//const Button = styled.button``;
const TreatmentButton: React.FunctionComponent = () => {
  return (
    <div>
      {/* <NavLink to="/home">Book Now</NavLink> */}
      <Line />
      {/* <br /> */}
      <Button variant="outline-secondary" size="lg" href="/treatment">
        Book Now
      </Button>
      {/* <br /> */}

      {/* <Line /> */}
    </div>
  );
};

export default TreatmentButton;
