import React from 'react';
import { Switch, Route } from "react-router-loading";
import LandingPage from 'view/pages/Introduction';
import About from "view/pages/About";
import Error from 'view/Error/Error';

export default function ContentRoute() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} loading />
      <Route exact path="/About" component={About} loading />
      <Route component={Error} />
    </Switch>
  );
}