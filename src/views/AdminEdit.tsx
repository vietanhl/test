import React from 'react';
import PageTitle from '../components/PageTitle';
import Menu from '../components/Menu';
import Auth from '../Auth/auth';
// import AdminEmployee from '../components/AdminEmployee/AdminEmployee';
import AdminMenu from '../components/AdminMenu/AdminMenu';

const AdminEdit: React.FunctionComponent = (props: any) => {
  const auth = new Auth(props.history);

  return (
    <>
      <Menu auth={auth} {...props} />
      <br />
      <br />
      <PageTitle title="Admin Management" />
      <AdminMenu />
      {/* <p>Employee management</p> */}
      {/* <AdminEmployee /> */}

      {/* <p>Treatment management</p> */}
    </>
  );
};

export default AdminEdit;
