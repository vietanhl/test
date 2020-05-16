import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import AdminCalendar from '../components/AdminCalendar/AdminCalendar';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';

const Api: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);
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
  return (
    <>
      <Menu auth={auth} {...props} />
      <PageTitle title="Booking Management" />
      <AdminCalendar {...props} />
    </>
  );
};

export default Api;
