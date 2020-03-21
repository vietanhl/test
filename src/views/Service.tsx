import React, { useState, useEffect } from 'react';
import BookButton from '../components/BookButton';
import PageTitle from '../components/PageTitle';
import TreatmentList from '../components/ServiceList';

const Service: React.FunctionComponent = (props: any) => {
  const [treatmentId, setTreatmentId] = useState();
  const [treatmentName, setTreatmentName] = useState();

  const treatmentSelected = (treatmentId: any, treatmentName: any) => {
    setTreatmentId(treatmentId);
    setTreatmentName(treatmentName);
    console.log('treatment Id' + treatmentId);
    console.log('treatment Name' + treatmentName);
    // console.log(props);
  };

  return (
    <div>
      <PageTitle title="Available Treatments" />
      <TreatmentList parentCallBack={treatmentSelected} />

      {/* <BookButton treatment={cardObject} {...props}>
        Book Now
      </BookButton> */}
      <BookButton
        treatmentId={treatmentId}
        treatmentName={treatmentName}
        {...props}
      >
        Book Now
      </BookButton>
    </div>
  );
};

export default Service;
