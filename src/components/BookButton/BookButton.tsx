import React from 'react';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

const BookButton: React.FunctionComponent = (props: any) => {
  const isDisabled = () => {
    if (
      props.treatmentId === undefined ||
      Object.keys(props.treatmentId).length === 0 ||
      props.treatmentId === 0 ||
      Object.values(props.treatmentId)[0] === 0
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <ContainerUl>
        <ContainerLi>
          <Link
            to={{
              pathname: '/',
            }}
          >
            <Button variant="outline-secondary" size="lg">
              Back
            </Button>
          </Link>
        </ContainerLi>
        <ContainerLi>
          <Link
            to={{
              pathname: '/book',
              state: {
                treatmentId: props.treatmentId,
                treatmentName: props.treatmentName,
              },
            }}
          >
            <Button
              variant="outline-secondary"
              size="lg"
              disabled={isDisabled()}
            >
              Next
            </Button>
          </Link>
        </ContainerLi>
      </ContainerUl>
    </>
  );
};

export default BookButton;
