import Loadable from 'react-loadable';
import React from 'react';
import { Spinner } from 'reactstrap';

export const HomePageView = Loadable({
  loader: () => import('./Homepage'),
  loading: () => <Spinner color="dark" />,
});

export const TreatmentView = Loadable({
  loader: () => import('./Service'),
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

export const BookView = Loadable({
  loader: () => import('./Book'),
  loading: () => <Spinner color="dark" />,
});

export const ConfirmationView = Loadable({
  loader: () => import('./Confirm'),
  loading: () => <Spinner color="dark" />,
});

export const OrderView = Loadable({
  loader: () => import('./Order'),
  loading: () => <Spinner color="dark" />,
});

export const ErrorPageView = Loadable({
  loader: () => import('./ErrorPage'),
  loading: () => <Spinner color="dark" />,
});
