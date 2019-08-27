import React from "react";
import { Route, Link } from "react-router-dom";


import Onboarding from "./Onboarding";
import Login from "./Login";
import Homepage from "./HomePage";
import Dashboard from "./Dashboard";

const Navigation = () => {
  return(
    <div>
      <Link to="/HomePage">Home</Link>
      <Link to="/Onboarding">Sign Up</Link>
      <Link to="/Login">Login</Link>
      <Route exact path="/HomePage" component={Homepage} />
      <Route path="/Onboarding" component={Onboarding} />
      <Route path="/Login" component={Login} />
    </div>
  );
};

export default Navigation;
