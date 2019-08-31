import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { Image } from "semantic-ui-react";
import Search from "./Search";

const Header = ({ history }) => {
  return (
    <div className="pageHeader">
      <Image src={require("../img/logo.png")} size="small" />
      <Navigation />
      <Search />
    </div>
  );
};

export default withRouter(Header);
