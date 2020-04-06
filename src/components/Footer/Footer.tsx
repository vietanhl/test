import React from 'react';
import Line from '../Line/Line';
import styled from 'styled-components';
import {
  companyName,
  instagram,
  email,
} from '../../config/merchantConfig/config';
const { SocialIcon } = require('react-social-icons');

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
  const sendEmail = () => {
    {
      window.open(`mailto:${email}`);
    }
  };
  return (
    <StyledFooter>
      <Line />

      <StyledText>
        <SocialIcon url={instagram} style={{ marginRight: '20px' }} />
        <SocialIcon
          network="email"
          onClick={sendEmail}
          style={{ marginRight: '20px' }}
        />
        <b>© {companyName} - January 2020</b>
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
