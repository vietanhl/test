import React from 'react';
import styled from 'styled-components';
import Line from '../Line/Line';

interface Props {
  title: string;
}
const Title = styled.div`
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-weight: bold;
  font-size: calc(18px + 1vmin);
  margin-block-end: 1em;
`;

const PageTitle: React.FunctionComponent<Props> = ({ title }) => (
  <Title>
    <Line />
    {title}
    <Line />
  </Title>
);

export default PageTitle;
