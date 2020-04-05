import React, { useState, useEffect } from 'react';
import BookButton from '../components/BookButton';
import PageTitle from '../components/PageTitle';
import TreatmentList from '../components/ServiceList';
import Stepper from '../components/Stepper/Stepper';

const Service: React.FunctionComponent = (props: any) => {
  const [treatmentId, setTreatmentId] = useState();
  const [treatmentName, setTreatmentName] = useState();

  const treatmentSelected = (treatmentId: any, treatmentName: any) => {
    setTreatmentId(treatmentId);
    setTreatmentName(treatmentName);
  };
  useEffect(() => {
    console.log('Treatments: ' + JSON.stringify(props));
  }, []);

  return (
    <div>
      <Stepper />
      <PageTitle title="Available Treatments" />
      <TreatmentList parentCallBack={treatmentSelected} {...props} />
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
