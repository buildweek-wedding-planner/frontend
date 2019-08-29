import React from "react";
import { Link } from "react-router-dom";


import Onboarding from "./Onboarding";
import Login from "./Login";
import Homepage from "./HomePage";
import Dashboard from "./Dashboard";
import SinglePost from "./SinglePost";

const Navigation = () => {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
    </div>
  );
};

export default Navigation;
