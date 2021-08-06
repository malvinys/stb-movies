import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import DetailPage from '../pages/DetailPage/DetailPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:id" component={DetailPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
