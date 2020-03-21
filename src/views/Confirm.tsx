import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Form from '../components/ContactForm';
import Line from '../components/Line/Line';
import OrderButton from '../components/OrderButton/OrderButton';

const Confirm: React.FunctionComponent = (props: any) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: 'string',
    email: '',
    phone: '',
    comments: '',
    terms: false,
  });
  console.log(JSON.stringify(props));
  //TODO: Validation if props are not there
  var time = JSON.stringify(props.location.state.time);
  var date = JSON.stringify(props.location.state.date);
  var treatmentName = props.location.state.treatmentName;
  var treatmentId = props.location.state.treatmentId;

  // console.log('treatment: ' + JSON.stringify(props.location.state.treatment));
  // console.log('time: ' + JSON.stringify(props.location.state.time));
  // console.log('date: ' + JSON.stringify(props.location.state.date));
  // console.log('staff: ' + JSON.stringify(props.location.state.staff));
  const FormDetails = (formData: any) => {
    console.log(JSON.stringify(formData));
    setForm(formData);
  };

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
      <Form parentCallBack={FormDetails} />
      <Line />
      <OrderButton
        form={form}
        treatmentId={treatmentId}
        treatmentName={treatmentName}
        {...props}
      />
    </div>
  );
};

export default Confirm;
