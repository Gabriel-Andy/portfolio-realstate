import React from "react";
import "./css/App.css";
import Agents from "./pages/Agents";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import SingleAgent from "./pages/SingleAgent";
import SingleHome from "./pages/SingleHome";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Properties/" component={Properties} />
        <Route exact path="/agents/" component={Agents} />
        <Route exact path="/Properties/:home" component={SingleHome} />
        <Route exact path="/Agents/:agent" component={SingleAgent} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
