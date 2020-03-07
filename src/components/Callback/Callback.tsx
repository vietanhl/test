import React, { useEffect } from "react";

const Callback = (props: any) => {
  //handle authentication if expected values are in the URL.
  useEffect(() => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      console.log(props.auth);
      props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  }, [props.auth, props.location.hash]);
  return (
    <div>
      <p>Loading ...</p>
    </div>
  );
};

export default Callback;
