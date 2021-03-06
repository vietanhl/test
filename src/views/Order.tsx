import React, { useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
import Line from '../components/Line';
import * as api from '../containers/EmailConfirmationContainer/EmailConfirmationContainer';

const Order: React.FunctionComponent = (props: any) => {
  //TODO: Validation if props are not there
  const auth = new Auth(props.history);
  // const { isAuthenticated } = props.auth;

  useEffect(() => {
    async function fetchMyApi() {
      const res = await api.sendConfirmationEmail(
        props.location.state.email,
        props.location.state.firstName,
        `Your order has been confirmed on ${props.location.state.date} at ${
          props.location.state.time
        } for ${props.location.state.treatmentName.map((x: string) => {
          return `${x} `;
        })}
        `
      );
      console.log(JSON.stringify(res));
    }
    fetchMyApi();
  }, [
    props.location.state.date,
    props.location.state.email,
    props.location.state.firstName,
    props.location.state.time,
    props.location.state.treatmentName,
  ]);

  return (
    <div>
      <Menu auth={auth} {...props} />
      <br />
      <br />

      <PageTitle
        title={`Enjoy your treatment ${props.location.state.firstName}!`}
      />
      <h4 className="heading">Appointment</h4>
      <Line />
      <p>
        {props.location.state.time} - {props.location.state.date}
      </p>
      <h4 className="heading">Treatment</h4>
      <Line />
      {props.location.state.treatmentName.map((x: string) => {
        return <p>{x} </p>;
      })}
      {/* <p>{props.location.state.treatmentName}</p> */}
      <h4 className="heading">Phone</h4>
      <Line />
      <p>{props.location.state.phone}</p>
      <h4 className="heading">Comments</h4>
      <Line />
      <p>{props.comments}</p>
      <p>
        Confirmation has been sent to your email {props.location.state.email}
      </p>
    </div>
  );
};

export default Order;
