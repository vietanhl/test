import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const Menu: React.FunctionComponent = () => {
  return (
    <div>
      <ContainerUl>
        <ContainerLi>
          {' '}
          <NavLink to="/home">[Simply Book]</NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {' '}
          <NavLink to="/treatment">- Treatments -</NavLink>{' '}
        </ContainerLi>
        <ContainerLi>
          {' '}
          <NavLink to="/contact">- Contact -</NavLink>{' '}
        </ContainerLi>
      </ContainerUl>
    </div>
  );
};

export default Menu;
