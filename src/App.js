import React from "react";
import "./App.scss";


import Onboarding from "./Components/Onboarding";
import HomePage from "./Components/HomePage";
import SignUpModal from "./Components/SignUpModal";
import Router from "./Components/Router";
import Navigation from "./Components/Navigation";



function App() {
  return (
    <div>

      <Navigation />


      <Router />
    </div>
  );
}

export default App;
