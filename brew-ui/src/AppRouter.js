import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header/Header";
import App from "./App.js";
import Region from "./components/Region";
import Place from "./components/Place";

function AppRouter() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/regions/:regionName" exact component={Region}/>
        <Route path="/regions/:regionName/places/:placeName" exact component={Place}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;
