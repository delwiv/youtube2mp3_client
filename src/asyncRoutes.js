import { Route, Switch } from 'react-router';

// Import modules/routes
import AppLoader from './components/AppLoader';
import Loadable from 'react-loadable';
import React from 'react';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
  loader: () => import('./components/home'),
  loading: AppLoader
});
const About = Loadable({
  loader: () => import('./components/about'),
  loading: AppLoader
});
const PageNotFound = Loadable({
  loader: () => import('./components/PageNotFound'),
  loading: AppLoader
});

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
