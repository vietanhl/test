import React from 'react';
import PageTitle from '../components/PageTitle';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ErrorPage: React.FunctionComponent = () => {
  const unicornImage = require('../Images/unicorn.png');
  const sendEmail = () => {
    window.open(`mailto:paperandpenltd@gmail.com`);
  };
  return (
    <>
      <PageTitle title="Oops something went wrong" />
      <p> If the problem reoccurs, please email us at: </p>
      <p onClick={sendEmail} className="link">
        {' '}
        paperandpenltd@gmail.com
      </p>
      <img src={unicornImage} height="20%" width="20%" alt="unicorn" />
      <br />
      <Link
        to={{
          pathname: '/home',
        }}
      >
        <Button variant="outline-secondary" size="lg">
          Return to hompage
        </Button>
      </Link>
    </>
  );
};

export default ErrorPage;
