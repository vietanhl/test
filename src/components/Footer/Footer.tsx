import React from 'react';
import Line from '../Line/Line';
import styled from 'styled-components';

const StyledFooter = styled.div`
  text-align: center;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;
  background-color: white;
  padding-bottom: 20px;
  padding-top: 20px;
  color: #282c34;
`;
const StyledText = styled.p`
  background-color: white;
`;
const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <Line />
      <StyledText>
        <b>© Simply Book - January 2020</b>
        <br />
        Social media accounts linked here.
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
