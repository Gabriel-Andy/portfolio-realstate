import React from "react";
import "./App.css";
import Agents from "./pages/Agents";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import SingleAgent from "./pages/SingleAgent";
import SingleHome from "./pages/SingleHome";

function App() {
  return (
    <>
      <Home />
      <Properties />
      <SingleAgent />
      <SingleHome />
      <Error />
      <Agents />
    </>
  );
}

export default App;
