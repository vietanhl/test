import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
import {
  companyPhone,
  instagram,
  email,
  address,
} from '../config/merchantConfig/config';
import Line from '../components/Line/Line';
const { SocialIcon } = require('react-social-icons');

const ContainerUl = styled.div`
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

const ContainerLi = styled.li`
  font-size: calc(20px + 1vmin);
  list-style: none;

  &:hover {
    font-weight: bold;
    color: black;
  }
`;

const Contact: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);
  const sendEmail = () => {
    {
      window.open(`mailto:${email}`);
    }
  };

  return (
    <>
      <Menu auth={auth} {...props} />
      <ContainerUl>
        <PageTitle title="Contact us" />
        <ContainerLi>
          <a>Address</a>
          <p>{address}</p>
          <Line />
        </ContainerLi>
        <ContainerLi>
          <p>Phone</p>
          <p>{companyPhone}</p>
          <Line />
        </ContainerLi>
        <ContainerLi>
          {/* <a href={instagram} className="link">
            Instagram
          </a> */}
          <SocialIcon url={instagram} style={{ marginRight: '20px' }} />
          <SocialIcon network="email" onClick={sendEmail} />
          {/* <br />
          <a href={instagram} className="link">
            {instagram}
          </a> */}
          <Line />
        </ContainerLi>
        {/* <ContainerLi> */}
        {/* <SocialIcon network="email" onClick={sendEmail} /> */}
        {/* <p onClick={sendEmail} className="link">
            {' '}
            Email
          </p>
          <p onClick={sendEmail} className="link">
            {email}
          </p> */}
        {/* <Line />
        </ContainerLi> */}
      </ContainerUl>
    </>
  );
};

export default Contact;
