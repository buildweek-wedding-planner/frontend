import React from "react";
import { withRouter } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import Login from "./Login";

const Navigation = ({ history }) => {
  return (
    <>
      <SignUpModal />
      <Login history={history} />
    </>
  );
};

export default withRouter(Navigation);
