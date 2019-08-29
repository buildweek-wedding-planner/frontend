import React, { useState, useEffect } from "react";
import Onboarding from "./Onboarding";

const Dashboard = (props) => {

  return (
    <div>
      {props.user.map(user =>{
        return <h4 key={user.id}>hi {user.firstName}</h4>
      })}
    </div>
  );
};

export default Dashboard;
