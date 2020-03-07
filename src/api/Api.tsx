import React, { useState, useEffect } from 'react';
import PageTitle from '../components/PageTitle';
import Calendar from '../components/Calendar/Calendar';

const Api: React.FunctionComponent = (props: any) => {
  const [message, setMessage] = useState('');
  const [privateMessage, setPrivateMessage] = useState('');
  const [scopeMessage, setScopeMessage] = useState('');
  const [adminMessage, setAdminMessage] = useState('');

  //PUBLIC
  const fetchPublicApi = () => {
    fetch('/public')
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response failed');
      })
      .then(response => setMessage(response.message))
      .catch(error => setMessage(error.message));
  };
  useEffect(() => {
    fetchPublicApi();
  }, []);

  //PRIVATE
  const fetchPrivateApi = () => {
    fetch('/book', {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response failed');
      })
      .then(response => setPrivateMessage(response.message))
      .catch(error => setPrivateMessage(error.message));
  };

  useEffect(() => {
    fetchPrivateApi();
  }, []);

  //scope
  const fetchScopeApi = () => {
    fetch('/scopes', {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response failed');
      })
      .then(response => setScopeMessage(response.message))
      .catch(error => setScopeMessage(error.message));
  };

  useEffect(() => {
    fetchScopeApi();
  }, []);

  //Admin role
  const fetchAdminApi = () => {
    fetch('/admin', {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()}` },
    })
      .then(response => {
        if (response.ok) {
          console.log('admin authenticated!');
          return response.json();
        }
        throw new Error('Network response failed');
      })
      .then(response => setAdminMessage(response.message))
      .catch(error => setAdminMessage(error.message));
  };

  useEffect(() => {
    fetchAdminApi();
  }, []);
  return (
    <>
      <PageTitle title="Select an appointment time" />
      <Calendar />
      {/* <div>public message: {message}</div>
      <div>private message: {privateMessage}</div>
      <div>scope message: {scopeMessage}</div>
      <div>admin message: {adminMessage}</div> */}
    </>
  );
};

export default Api;
