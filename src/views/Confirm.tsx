import React from 'react';
import PageTitle from '../components/PageTitle';
import Form from '../components/ContactForm';

const Confirm: React.FunctionComponent = (props: any) => {
  console.log(JSON.stringify(props));
  //TODO: Validation if props are not there
  var listOfTreatment = JSON.stringify(props.location.state.treatment);
  var time = JSON.stringify(props.location.state.time);
  var date = JSON.stringify(props.location.state.date);
  var staff = JSON.stringify(props.location.state.staff);

  // console.log('treatment: ' + JSON.stringify(props.location.state.treatment));
  // console.log('time: ' + JSON.stringify(props.location.state.time));
  // console.log('date: ' + JSON.stringify(props.location.state.date));
  // console.log('staff: ' + JSON.stringify(props.location.state.staff));

  return (
    <>
      <PageTitle title="Contact details" />
      <Form {...props} />
    </>
  );
};

export default Confirm;
