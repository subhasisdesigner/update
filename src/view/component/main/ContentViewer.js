import React from 'react';
import { Switch, Route } from "react-router-loading";

import LandingPage from '../../Introduction';
import About from "../../About"
import Error from '../../Error/Error';

export default function ContentViewer(){
  return(
        <Switch>
        <Route exact path="/" component={LandingPage} loading/>
        <Route exact path="/About" component={About} loading/>
        <Route component={Error}/>
      </Switch>      
  );
}