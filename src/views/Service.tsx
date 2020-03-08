import React, { useState, useEffect } from 'react';
import BookButton from '../components/BookButton';
import PageTitle from '../components/PageTitle';
import TreatmentList from '../components/ServiceList';

const Service: React.FunctionComponent = (props: any) => {
  const cardObject = {
    title: 'Title',
    price: '£20',
    description: 'this is a description of the product',
  };

  return (
    <div>
      <PageTitle title="Available Treatments" />
      <TreatmentList />

      {/* <BookButton treatment={cardObject} {...props}>
        Book Now
      </BookButton> */}
    </div>
  );
};

export default Service;
