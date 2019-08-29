import React from "react";
import { withRouter } from "react-router-dom";
import PostPage from "./PostPage";
import SignUpModal from "./SignUpModal";
import Login from "./Login";

const Navigation = ({ history }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <PostPage />;
  }
  return (
    <>
      <SignUpModal />
      <Login history={history} />
    </>
  );
};

export default withRouter(Navigation);
