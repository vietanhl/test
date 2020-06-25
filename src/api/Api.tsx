import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import AdminCalendar from '../components/AdminCalendar/AdminCalendar';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
import Modal from '../components/Modal';

const Api: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);
  const [editBooking, setEditBooking] = useState(false);
  const [event, setEvent] = useState();
  console.log('event from admin page' + JSON.stringify(event));
  const eventSelected = (ev: any) => {
    setEvent(ev);
    // console.log('ev' + JSON.stringify(ev));
    setEditBooking(true);
    console.log('treatment ev ' + ev.treatmentId);
    console.log('ev name ' + ev.treatmentName);
  };
  useEffect(() => {
    console.log(editBooking);
    console.log('ev' + JSON.stringify(event));
    // console.log('treatment ev ' + event.Treatment)
  }, [eventSelected]);
  //  useEffect(() => {
  //   console.log('Treatments: ' + JSON.stringify(props));
  // }, []);
  return (
    <>
      <Menu auth={auth} {...props} />
      <br />
      <br />
      <PageTitle title="Booking Management" />
      <AdminCalendar parentCallBack={eventSelected} {...props} />
      {/* <TreatmentList parentCallBack={treatmentSelected} {...props} /> */}
      <Modal event={event} {...props} />
    </>
  );
};

export default Api;
