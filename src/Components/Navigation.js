import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import PostPage from "./PostPage";
import SignUpModal from "./SignUpModal";
import Login from "./Login";

const Navigation = ({ history }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return (
      <>
        <NavLink to="/">
          <Button content={"Home"} />
        </NavLink>
        <NavLink to="/dashboard">
          <Button content={"Dashboard"} />
        </NavLink>
        <PostPage />
      </>
    );
  }
  return (
    <>
      <SignUpModal />
      <Login history={history} />
    </>
  );
};

export default withRouter(Navigation);
