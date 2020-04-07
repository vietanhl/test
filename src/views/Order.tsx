import React from 'react';
import PageTitle from '../components/PageTitle';
import Stepper from '../components/Stepper/Stepper';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';

const Order: React.FunctionComponent = (props: any) => {
  //TODO: Validation if props are not there
  const auth = new Auth(props.history);
  // const { isAuthenticated } = props.auth;

  return (
    <>
      <Menu auth={auth} {...props} />
      <Stepper />
      <PageTitle
        title={`Enjoy your treatment ${props.location.state.firstName}!`}
      />
      <h4 className="heading">Appointment</h4>
      <p>
        {props.location.state.time} - {props.location.state.date}
      </p>
      <h4 className="heading">Treatment</h4>
      {props.location.state.treatmentName.map((x: string) => {
        return <p>{x} </p>;
      })}
      {/* <p>{props.location.state.treatmentName}</p> */}
      <h4 className="heading">Phone</h4>
      <p>{props.location.state.phone}</p>
      <h4 className="heading">Comments</h4>
      <p>{props.comments}</p>
      <p>
        Confirmation has been sent to your email {props.location.state.email}
      </p>
    </>
  );
};

export default Order;
