import React from "react";

const Logout: React.FunctionComponent = (props: any) => {
  const { isAuthenticated, login } = props.auth;

  return (
    <>
      {isAuthenticated() ? (
        <button onClick={props.auth.logout}>Logout</button>
      ) : null}
    </>
  );
};

export default Logout;
