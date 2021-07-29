import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import Consult from "./pages/Consult";
import Doctors from "./pages/Doctors";
import Home from './pages/Home';
import Social from "./pages/Social";
import UserRegister from './pages/UserRegister';
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
                <Route path="/social" exact>
                    <Social />
                </Route>
                <Route path="/register" exact>
                    <UserRegister />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
                <Redirect from="*" to="/home" />
            </Switch>
        </div>
    );
};

export default MainComponent;
