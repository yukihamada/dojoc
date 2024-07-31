
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './page';
import ProfileUpdate from './profile-update';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile-update" component={ProfileUpdate} />
        <Route path="/" component={Page} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
