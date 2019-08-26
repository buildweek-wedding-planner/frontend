import React from "react";
import "./App.scss";


import HomePage from "./Components/HomePage";
import SignUpModal from "./Components/SignUpModal";
import Router from "./Components/Router";



function App() {
  return (
    <div>

      <SignUpModal />

      <HomePage />

      <Router />

    </div>
  );
}

export default App;
