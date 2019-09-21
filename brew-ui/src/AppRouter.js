import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import App from "./App.js";

function AppRouter() {
  return (
    <Router>
      <Header/>
      <div>
        <Route path="/" exact component={App} />
      </div>
    </Router>
  );
}

export default AppRouter;
