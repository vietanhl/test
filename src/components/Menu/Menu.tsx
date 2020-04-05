import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../Logout';

const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Courier New', Courier, monospace;

  &:hover {
    color: #282c34;
  }
`;

const ContainerLi = styled.li`
  display: inline;
  padding-right: 50px;

  &:hover {
    color: #282c34;
  }
`;

const Menu: React.FunctionComponent = (props: any) => {
  const { isAuthenticated } = props.auth;
  return (
    <div>
      <ContainerUl>
        <ContainerLi>
          {' '}
          <NavLink to="/home">Paper&Pen</NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {' '}
          <NavLink to="/treatment">Book Now</NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {' '}
          <NavLink to="/contact">Contact</NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {!isAuthenticated() ? (
            <LoginButton {...props} />
          ) : (
            <LogoutButton {...props} />
          )}
        </ContainerLi>
      </ContainerUl>
    </div>
  );
};

export default Menu;
