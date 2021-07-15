import React from "react";
import { Switch, Route } from "react-router";
import Home from './pages/Home';

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>

            </Switch>
        </div>
    );
};

export default MainComponent;
