import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// // layouts

import User from "./layouts/User.js";

// // views without layouts


// ReactDOM.render(
// <BrowserRouter>
//   <Switch>
//     {/* add routes with layouts */}
//     <Route path="/admin" component={Admin} />
//     <Route path="/auth" component={Auth} />
//     {/* add routes without layouts */}
//     <Route path="/landing" exact component={Landing} />
//     <Route path="/profile" exact component={Profile} />
//     <Route path="/" exact component={Index} />
//     {/* add redirect for first page */}
//     <Redirect from="*" to="/" />
//   </Switch>
// </BrowserRouter>,
//   document.getElementById("root")
// );


const Dashboard = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/user" component={User} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/user" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Dashboard;
