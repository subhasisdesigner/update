import React from 'react';
import { Switch, Route } from "react-router-loading";
import LandingPage from '../view/pages/Introduction';
import About from "../view/pages/About"
import Error from '../Error/Error';

export default function ContentRoute() {
  return (
    <Switch>
      <Route exact path="/update" component={LandingPage} loading />
      <Route path="/update/About" component={About} loading />
      <Route component={Error} />
    </Switch>
  );
}