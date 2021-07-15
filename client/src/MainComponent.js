import React from "react";
import { Switch, Route,Redirect } from "react-router";
import Home from './pages/Home';

const MainComponent = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Redirect from="*" to="/home" />
      </Switch>
    </div>
  );
};

export default MainComponent;
