import React from 'react';
import Button from 'react-bootstrap/Button';

const LoginButton: React.FunctionComponent = (props: any) => {
  const { isAuthenticated } = props.auth;
  return (
    <>
      {!isAuthenticated() ? (
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={props.auth.login}
        >
          Login
        </Button>
      ) : null}
    </>
  );
};

export default LoginButton;
