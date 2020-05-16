import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginButton from '../LoginButton';
import LogoutButton from '../Logout';
import { companyName } from '../../config/merchantConfig/config';

const ContainerUl = styled.ul`
  padding-top: 20px;
  text-align: center;
  list-style: none;
  font-family: 'Abril Fatface', cursive;

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
const ContainerLogo = styled.li`
  display: inline;
  padding-right: 50px;
  text-align: left;

  &:hover {
    color: #282c34;
  }
`;

const Menu: React.FunctionComponent = (props: any) => {
  const { isAuthenticated } = props.auth;
  return (
    <div>
      <ContainerUl>
        <ContainerLogo>
          {' '}
          <NavLink className="heading" to="/home">
            {companyName}
          </NavLink>{' '}
        </ContainerLogo>
        <ContainerLi>
          {' '}
          <NavLink className="menu-heading" to="/treatment">
            Book Now
          </NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {' '}
          <NavLink className="menu-heading" to="/contact">
            Contact
          </NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {isAuthenticated() ? (
            <NavLink className="menu-heading" to="/scopes">
              Admin
            </NavLink>
          ) : null}{' '}
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
