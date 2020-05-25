import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import AdminCalendar from '../components/AdminCalendar/AdminCalendar';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
import Modal from '../components/Modal';

const Api: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);

  // useEffect(() => {
  //   console.log('Treatments: ' + JSON.stringify(props));
  // }, []);

  // const [message, setMessage] = useState('');
  // const [privateMessage, setPrivateMessage] = useState('');
  // const [scopeMessage, setScopeMessage] = useState('');
  // const [adminMessage, setAdminMessage] = useState('');

  //PUBLIC
  // const fetchPublicApi = () => {
  //   fetch('/book')
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       throw new Error('Network response failed');
  //     })
  //     .then(response => setMessage(response.message))
  //     .catch(error => setMessage(error.message));
  // };
  // useEffect(() => {
  //   fetchPublicApi();
  // }, []);

  //PRIVATE
  // const fetchPrivateApi = () => {
  //   fetch('/book', {
  //     headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
  //   })
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       throw new Error('Network response failed');
  //     })
  //     .then(response => setPrivateMessage(response.message))
  //     .catch(error => setPrivateMessage(error.message));
  // };

  // useEffect(() => {
  //   fetchPrivateApi();
  // }, []);

  //scope
  // const fetchScopeApi = () => {
  //   fetch('/scopes', {
  //     headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
  //   })
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       throw new Error('Network response failed');
  //     })
  //     .then(response => setScopeMessage(response.message))
  //     .catch(error => setScopeMessage(error.message));
  // };

  // useEffect(() => {
  //   fetchScopeApi();
  // }, []);

  // //Admin role
  // const fetchAdminApi = () => {
  //   fetch('/admin', {
  //     headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //         console.log('admin authenticated!');
  //         return response.json();
  //       }
  //       throw new Error('Network response failed');
  //     })
  //     .then(response => setAdminMessage(response.message))
  //     .catch(error => setAdminMessage(error.message));
  // };

  // useEffect(() => {
  //   fetchAdminApi();
  // }, []);
  const [editBooking, setEditBooking] = useState(false);
  const [event, setEvent] = useState();
  console.log('event from admin page' + JSON.stringify(event));
  const eventSelected = (ev: any) => {
    setEvent(ev);
    console.log('ev' + JSON.stringify(ev));
    setEditBooking(true);
  };
  useEffect(() => {
    console.log(editBooking);
    console.log('ev' + JSON.stringify(event));
  }, [eventSelected]);
  //  useEffect(() => {
  //   console.log('Treatments: ' + JSON.stringify(props));
  // }, []);
  return (
    <>
      <Menu auth={auth} {...props} />
      <PageTitle title="Booking Management" />
      <AdminCalendar parentCallBack={eventSelected} {...props} />
      {/* <TreatmentList parentCallBack={treatmentSelected} {...props} /> */}
      <Modal event={event} {...props} />
    </>
  );
};

export default Api;
