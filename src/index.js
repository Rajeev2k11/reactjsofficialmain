/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Training from "views/examples/Training";
import Terms from "views/examples/Terms";
import Privacy from "views/examples/Privacy";
import Refund from "views/examples/Refund";
import About from "views/examples/About";
import Job from "views/examples/Job";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/about-page"
        render={(props) => <About {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
       <Route
        path="/terms-page"
        render={(props) => <Terms {...props} />}
      />
      <Route
        path="/refund-page"
        render={(props) => <Refund {...props} />}
      />
      <Route
        path="/job-page"
        render={(props) => <Job {...props} />}
      />
      <Route
        path="/privacy-page"
        component={Privacy}
      />
      <Route
        path="/react-training"
         component={Training}
      />
      <Redirect from="/" to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
