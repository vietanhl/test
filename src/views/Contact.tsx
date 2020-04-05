import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';

const ContainerUl = styled.div`
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
`;

const ContainerLi = styled.li`
  font-size: calc(20px + 1vmin);
  list-style: none;

  &:hover {
    font-weight: bold;
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
        </ContainerLi>
        <ContainerLi>
          <p>Instagram</p>
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default Contact;
