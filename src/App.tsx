import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import {
  HomePageView,
  TreatmentView,
  ContactView,
  LoginView,
  BookView,
  ConfirmationView,
} from './views/LoadableView';
import Footer from './components/Footer/Footer';
import Auth from './Auth/auth';
import Callback from './components/Callback/Callback';
import Api from './Api/Api';
//add to view
import ConfirmationPage from './views/Confirm';

const Container = styled.div``;

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

  return (
    <Container>
      <Header>
        <BrowserRouter>
          <Menu auth={auth} {...props} />
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

            {/* <Route
              path="/book"
              component={(props: any) => {
                return <Api auth={auth} {...props} />;
              }}
            /> */}
            <Route
              path="/callback"
              component={(props: any) => {
                return <Callback auth={auth} {...props} />;
              }}
            />

            {/* <Route
              path="/scopes"
              component={(props: any) =>
                auth.isAuthenticated() &&
                auth.userHasScopes(["read:customer"]) ? (
                  <Api auth={auth} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            /> */}
          </Switch>
        </BrowserRouter>
      </Header>
      <Footer />
    </Container>
  );
};

export default App;
