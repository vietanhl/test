import React, { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import Calendar from '../components/Calendar/Calendar';
import ConfirmBookingButton from '../components/ConfirmBookingButton/ConfirmBookingButton';

const Book: React.FunctionComponent = (props: any) => {
  const [treatmentId, setTreatmentId] = useState();
  const [treatmentName, setTreatmentName] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setTreatmentId(props.location.state.treatmentId);
    setTreatmentName(props.location.state.treatmentName);
    // console.log(' Book page - ' + treatmentId + treatmentName);
  }, []);
  // console.log(' Book page - ' + treatmentId + treatmentName);
  const treatmentSelected = (date: any, time: any) => {
    setDate(date);
    setTime(time);
    // console.log('date' + date);
    // console.log('time' + time);
  };

  return (
    <>
      <PageTitle title="Select an appointment time" />
      <Calendar
        treatmentId={treatmentId}
        treatmentName={treatmentName}
        parentCallBack={treatmentSelected}
      />
      <ConfirmBookingButton
        date={date}
        time={time}
        treatmentId={treatmentId}
        treatmentName={treatmentName}
        {...props}
      />
    </>
  );
};

export default Book;
