import React from "react";
import { Switch, Route,Redirect } from "react-router";
import Home from './pages/Home';

const MainComponent = () => {
<<<<<<< HEAD
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
=======
    return (
        <div>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>

            </Switch>
        </div>
    );
>>>>>>> 67a300c03635dab816c5212d423bed9880c03c4a
};

export default MainComponent;
