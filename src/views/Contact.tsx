import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
import { companyPhone, instagram } from '../config/merchantConfig/config';
import Line from '../components/Line/Line';

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

  return (
    <>
      <Menu auth={auth} {...props} />
      <ContainerUl>
        <PageTitle title="Contact us" />
        <ContainerLi>
          <p>Phone</p>
          <p>{companyPhone}</p>
          <Line />
        </ContainerLi>
        <ContainerLi>
          <a href={instagram} className="link">
            Instagram
          </a>
          <Line />
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default Contact;
