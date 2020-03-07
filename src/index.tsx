import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  //force refresh - to fix callback
  <Router forceRefresh={true}>
    <Route component={App} />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
