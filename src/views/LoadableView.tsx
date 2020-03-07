import Loadable from 'react-loadable';
import React from 'react';
import { Spinner } from 'reactstrap';

export const HomePageView = Loadable({
  loader: () => import('./Homepage'),
  loading: () => <Spinner color="dark" />,
});

export const TreatmentView = Loadable({
  loader: () => import('./Treatment'),
  loading: () => <Spinner color="dark" />,
});

export const ContactView = Loadable({
  loader: () => import('./Contact'),
  loading: () => <Spinner color="dark" />,
});

export const LoginView = Loadable({
  loader: () => import('./Login'),
  loading: () => <Spinner color="dark" />,
});
