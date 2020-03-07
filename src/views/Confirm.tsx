import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';

const Confirm: React.FunctionComponent = (props: any) => {
  return (
    <>
      <PageTitle title="Enjoy your treatment!" />
      <p>Confirmation has been sent to your email!</p>
    </>
  );
};

export default Confirm;
