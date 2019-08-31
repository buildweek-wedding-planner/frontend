import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Onboarding from "./Onboarding";
import Login from "./Login";

const Navigation = ({ history }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <div>
        <NavLink to="/">
          <Button content={"Home"} />
        </NavLink>
        <NavLink to="/dashboard">
          <Button content={"Posts"} />
        </NavLink>
      </div>
    );
  }
  return (
    <div>
      <Onboarding />
      <Login history={history} />
    </div>
  );
};

export default withRouter(Navigation);
