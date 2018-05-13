import { Route, Switch } from 'react-router';

import About from './about';
// Import modules/routes
import Home from './home';
import PageNotFound from './common/components/PageNotFound';
import React from 'react';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Switch>
);
