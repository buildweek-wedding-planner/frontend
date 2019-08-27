import React from "react";
import { Route, Link } from "react-router-dom";


import Onboarding from "./Onboarding";
import Login from "./Login";
import Homepage from "./HomePage";
import Dashboard from "./Dashboard";

const Navigation = () => {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Onboarding">Sign Up</Link>
      <Link to="/Login">Login</Link>

    </div>
  );
};

export default Navigation;
