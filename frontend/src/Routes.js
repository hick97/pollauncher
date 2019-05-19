import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import TextPoll from './pages/TextPoll';
import TextView from './pages/TextView';
import ObjectivePoll from './pages/ObjectivePoll';
import ObjectiveView from './pages/ObjectiveView';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/textpoll/new/:id" exact component={TextPoll} />
      <Route path="/textpoll/:id" exact component={TextView} />
      <Route path="/objectivepoll/new/:id" exact component={ObjectivePoll} />
      <Route path="/objectivepoll/:id" exact component={ObjectiveView} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
