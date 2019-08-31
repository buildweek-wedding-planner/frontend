import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { Image } from "semantic-ui-react";

const Header = ({ history }) => {
  return (
    <div className="pageHeader">
      <Image src={require("../img/logo.png")} size="small" />
      <Navigation />
    </div>
  );
};

export default withRouter(Header);
