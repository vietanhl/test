import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as api from '../../containers/AdminEmployeeContainer/AdminEmployeeContainer';
import styled from 'styled-components';

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
  padding-right: 20px;

  &:hover {
    color: #282c34;
  }
`;

const AdminButtons: React.FunctionComponent = (id: any, props: any) => {
  useEffect(() => {
    console.log('PROPS: ' + props);
  }, [props]);
  const editEmployee = () => {
    console.log('Edit employee clicked' + id.id);
    // api.EditEmployee(id.id)
  };
  const deleteEmployee = () => {
    // api.DeleteEmployee(id.id)
  };
  return (
    <>
      <ContainerUl>
        <ContainerLi>
          {' '}
          <Button variant="outline-secondary" size="lg" onClick={editEmployee}>
            Update Employee
          </Button>
        </ContainerLi>
        <ContainerLi>
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={deleteEmployee}
          >
            Delete Employee
          </Button>
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default AdminButtons;
