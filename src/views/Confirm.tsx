import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import Form from '../components/ContactForm';
import Line from '../components/Line/Line';
import OrderButton from '../components/OrderButton/OrderButton';
import Stepper from '../components/Stepper/Stepper';
import { useMediaQuery } from 'react-responsive';

const Confirm: React.FunctionComponent = (props: any) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: 'string',
    email: '',
    phone: '',
    comments: '',
    terms: false,
  });

  //TODO: Validation if props are not there
  var time = JSON.stringify(props.location.state.time);
  var date = JSON.stringify(props.location.state.date);
  var treatmentName = props.location.state.treatmentName;
  var treatmentId = props.location.state.treatmentId;

  const FormDetails = (formData: any) => {
    console.log(JSON.stringify(formData));
    setForm(formData);
  };
  const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 900 });
    return isNotMobile ? children : null;
  };

  return (
    <div>
      <Default>
        <Stepper />
      </Default>

      <PageTitle title="Contact details" />

      <h1 className="heading"> Order Summary </h1>
      <p>
        {date} - {time}
      </p>
      <h4 className="heading">Treatment</h4>
      {treatmentName.map((x: string) => {
        return <p>{x} </p>;
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
