import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Consult from "./pages/Consult";
import Doctors from "./pages/Doctors";
import Home from './pages/Home';

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/doctors" exact>
                    <Doctors />
                </Route>
                <Route path="/consult" exact>
                    <Consult />
                </Route>

                <Redirect from="*" to="/home" />
            </Switch>
        </div>
    );
};

export default MainComponent;
