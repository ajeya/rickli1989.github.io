import React from 'react';
import { Route, browserHistory, Router } from 'react-router';

/* containers */
import { App } from './containers/App';
import { PageNotFound } from './containers/404';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route status={404} path="*" component={PageNotFound} />
  </Router>
);
