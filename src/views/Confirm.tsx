import React from 'react';
import PageTitle from '../components/PageTitle';
import Form from '../components/ContactForm';
import Line from '../components/Line/Line';

const Confirm: React.FunctionComponent = (props: any) => {
  console.log(JSON.stringify(props));
  //TODO: Validation if props are not there
  var listOfTreatment = JSON.stringify(props.location.state.treatment);
  var time = JSON.stringify(props.location.state.time);
  var date = JSON.stringify(props.location.state.date);
  var treatmentName = props.location.state.treatmentName;

  // console.log('treatment: ' + JSON.stringify(props.location.state.treatment));
  // console.log('time: ' + JSON.stringify(props.location.state.time));
  // console.log('date: ' + JSON.stringify(props.location.state.date));
  // console.log('staff: ' + JSON.stringify(props.location.state.staff));

  return (
    <div>
      <PageTitle title="Contact details" />
      <h1> Order Summary </h1>
      <p>
        {date} - {time}
      </p>
      <h4>Treatment</h4>
      {treatmentName.map((x: string) => {
        return <p>{x}</p>;
      })}
      <Line />
      {/* <p>{treatment}</p>       */}
      <Form {...props} />
      <Line />
    </div>
  );
};

export default Confirm;
