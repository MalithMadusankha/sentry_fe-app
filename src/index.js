import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import ForgetPassword from "views/examples/ForgetPassword";
import PatientProfile from "views/examples/PatientProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/landing" exact render={(props) => <Landing {...props} />} />
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      <Route
        path="/forget-password"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route path="/profile" exact render={(props) => <Profile {...props} />} />
      <Route
        path="/patient-profile"
        exact
        render={(props) => <PatientProfile {...props} />}
      />
      <Route
        path="/register"
        exact
        render={(props) => <Register {...props} />}
      />
      <Route
        path="/forget-password"
        exact
        render={(props) => <ForgetPassword {...props} />}
      />
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);
