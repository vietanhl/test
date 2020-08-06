import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import {
  HomePageView,
  TreatmentView,
  ContactView,
  LoginView,
  BookView,
  ConfirmationView,
  OrderView,
  ErrorPageView,
  AdminEditPageView,
} from './views/LoadableView';
import Footer from './components/Footer/Footer';
import Auth from './Auth/auth';
import Callback from './components/Callback/Callback';
import Api from './Api/Api';
import { useMediaQuery } from 'react-responsive';
//add to view
// import ConfirmationPage from './views/Confirm';

const Header = styled.body`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(15px + 1vmin);
  color: #282c34;
`;

const App = (props: any) => {
  const auth = new Auth(props.history);

  const Default = ({ children }: any) => {
    const isNotMobile = useMediaQuery({ minWidth: 1200 });
    return isNotMobile ? children : null;
  };

  return (
    <>
      <Default>
        <NavLink className="menu-heading" to="/home">
          <p className="centered">Paper&Pen</p>
        </NavLink>{' '}
      </Default>

      <Header>
        <BrowserRouter>
          {/* <Menu auth={auth} {...props} /> */}
          <Switch>
            <Route
              exact
              path="/"
              component={(props: any) => {
                return <HomePageView auth={auth} {...props} />;
              }}
            />
            <Route
              path="/home"
              component={(props: any) => {
                return <HomePageView auth={auth} {...props} />;
              }}
            />
            <Route path="/treatment" component={TreatmentView} />
            <Route path="/contact" component={ContactView} />
            <Route path="/login" component={LoginView} />
            <Route path="/book" component={BookView} />
            <Route path="/confirmation" component={ConfirmationView} />
            <Route path="/order" component={OrderView} />
            <Route
              path="/callback"
              component={(props: any) => {
                return <Callback auth={auth} {...props} />;
              }}
            />

            {/* <Route
              path="/book"
              component={(props: any) => {
                return <Api auth={auth} {...props} />;
              }}
            /> */}

            {
              <Route
                path="/scopes"
                component={(props: any) =>
                  auth.isAuthenticated() &&
                  auth.userHasScopes(['read:customer']) ? (
                    <Api auth={auth} {...props} />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
            }
            {
              <Route
                path="/admin-edit"
                component={(props: any) =>
                  auth.isAuthenticated() &&
                  auth.userHasScopes(['read:customer']) ? (
                    <AdminEditPageView auth={auth} {...props} />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
            }

            <Route path="*" component={ErrorPageView} />
            <Route path="/error" component={ErrorPageView} />
          </Switch>
        </BrowserRouter>
      </Header>
      <Footer />
    </>
  );
};

export default App;
