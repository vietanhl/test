import React from 'react';
import PageTitle from '../components/PageTitle';

const Confirm: React.FunctionComponent = (props: any) => {
  //TODO: Validation if props are not there
  var listOfTreatment = JSON.stringify(props.location.state.treatment);
  var time = JSON.stringify(props.location.state.time);
  var date = JSON.stringify(props.location.state.date);
  var staff = JSON.stringify(props.location.state.staff);

  console.log('treatment: ' + JSON.stringify(props.location.state.treatment));
  console.log('time: ' + JSON.stringify(props.location.state.time));
  console.log('date: ' + JSON.stringify(props.location.state.date));
  console.log('staff: ' + JSON.stringify(props.location.state.staff));

  return (
    <>
      <PageTitle title="Enjoy your treatment!" />
      <h1>Order Summary</h1>
      <p>
        Date {date} - {time}
      </p>
      <p> Treatment {listOfTreatment}</p>
      <p> Staff {staff}</p>
      <p>Confirmation has been sent to your email!</p>
    </>
  );
};

export default Confirm;
