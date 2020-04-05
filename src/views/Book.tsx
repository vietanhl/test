import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Calendar from '../components/Calendar/Calendar';
import ConfirmBookingButton from '../components/ConfirmBookingButton/ConfirmBookingButton';
import Stepper from '../components/Stepper/Stepper';

const Book: React.FunctionComponent = (props: any) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const treatmentSelected = (date: any, time: any) => {
    setDate(date);
    setTime(time);
  };

  return (
    <>
      <Stepper />
      <PageTitle title="Select an appointment time" />
      <Calendar
        treatmentId={props.location.state.treatmentId}
        treatmentName={props.location.state.treatmentName}
        parentCallBack={treatmentSelected}
      />
      <ConfirmBookingButton
        date={date}
        time={time}
        treatmentId={props.location.state.treatmentId}
        treatmentName={props.location.state.treatmentName}
        {...props}
      />
    </>
  );
};

export default Book;
