import React from 'react';
import PageTitle from '../components/PageTitle';

const Login: React.FunctionComponent = (props: any) => {
  const { isAuthenticated } = props.auth;
  console.log(props.auth);

  return (
    <>
      <PageTitle title="Login" />

      {!isAuthenticated() ? (
        <button onClick={props.auth.login}>Login</button>
      ) : null}
    </>
  );
};

export default Login;
