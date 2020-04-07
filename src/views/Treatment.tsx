import React from 'react';
import PageTitle from '../components/PageTitle';
import styled from 'styled-components';
import TreatmentCard from '../components/TreatmentCard/TreatmentCard';

const Container = styled.div`
  font-family: 'Abril Fatface', cursive;
`;

const Treatment: React.FunctionComponent = () => {
  return (
    <Container>
      <PageTitle title="Available Treatments" />
      {/* <TreatmentCard /> */}
    </Container>
  );
};

export default Treatment;
