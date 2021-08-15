import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views
import Dashboard from "../views/user/Dashboard.js";
import Maps from "../views/user/Maps.js";
import Settings from "../views/user/Settings.js";
import Tables from "../views/user/Tables.js";
import Social from "../views/user/Social.js";
import Econsult from "../views/user/Econsult.js";
import Diagnostics from "../views/user/Diagnostics.js";
import Doctors from "../views/user/Doctors.js";

export default function User() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            {/* <Route path="/user/dashboard" exact component={Dashboard} /> */}
            {/* <Route path="/user/maps" exact component={Maps} /> */}
            {/* <Route path="/user/settings" exact component={Settings} /> */}
            {/* <Route path="/user/tables" exact component={Tables} /> */}
            <Route path="/user/social" exact component={Social} />
            <Route path="/user/econsult" exact component={Econsult} />
            <Route path="/user/Diagnostics" exact component={Diagnostics} />
            <Route path="/user/Doctors" exact component={Doctors} />

            <Redirect from="/user" to="/user/social" />
          </Switch>
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
