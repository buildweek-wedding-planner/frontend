import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Search from "./Search";

const Navigation = ({ history }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <>
        <NavLink to="/">
          <Button content={"Home"} />
        </NavLink>
        <NavLink to="/dashboard">
          <Button content={"Posts"} />
        </NavLink>

        <Search />
      </>
    );
  }
  return (
    <>
      <Onboarding />
      <Login history={history} />
    </>
  );
};

export default withRouter(Navigation);
