import React from 'react';
import Button from 'react-bootstrap/Button';

const Logout: React.FunctionComponent = (props: any) => {
  const { isAuthenticated, login } = props.auth;

  return (
    <>
      {isAuthenticated() ? (
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={props.auth.logout}
        >
          Logout
        </Button>
      ) : null}
    </>
  );
};

export default Logout;
