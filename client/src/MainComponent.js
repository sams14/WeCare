import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Consult from "./pages/Consult";
import Doctors from "./pages/Doctors";
import Home from './pages/Home';
import UserLogin from './pages/UserLogin'
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
                <Route path="/userlogin" exact>
                    <UserLogin />
                </Route>
                <Redirect from="*" to="/home" />
            </Switch>
        </div>
    );
};

export default MainComponent;
