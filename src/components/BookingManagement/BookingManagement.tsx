import React, { useState } from 'react';
import PageTitle from '../PageTitle';
import AdminCalendar from '../AdminCalendar/AdminCalendar';
import Menu from '../Menu';
import Auth from '../../Auth/auth';
import Modal from '../Modal';

const Api: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);
  const [event, setEvent] = useState();
  console.log('event from admin page' + JSON.stringify(event));
  const eventSelected = (ev: any) => {
    setEvent(ev);        
    console.log('treatment ev ' + ev.treatmentId);
    console.log('ev name ' + ev.treatmentName);
  };

  return (
    <>
      <Menu auth={auth} {...props} />
      <br />
      <br />
      <PageTitle title="Booking Management" />
      <AdminCalendar parentCallBack={eventSelected} {...props} />     
      <Modal event={event} {...props} />
    </>
  );
};

export default Api;
