import React from 'react';
import PageTitle from '../components/PageTitle';
import Calendar from '../components/Calendar/Calendar';

const Book: React.FunctionComponent = (props: any) => {
  return (
    <>
      <PageTitle title="Select an appointment time" />
      <Calendar {...props} />
    </>
  );
};

export default Book;
