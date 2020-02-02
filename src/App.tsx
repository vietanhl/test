import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './components/Menu/Menu';
import { HomePageView, TreatmentView, ContactView } from './views/LoadableView';
import Footer from './components/Footer/Footer';

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

const App = () => {
  return (
    <Container>
      <Header>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePageView} />
            <Route path="/home" component={HomePageView} />
            <Route path="/treatment" component={TreatmentView} />
            <Route path="/contact" component={ContactView} />
          </Switch>
        </BrowserRouter>
      </Header>
      <Footer />
    </Container>
  );
};

export default App;
