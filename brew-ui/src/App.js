import React from "react";
import useFetch from './hooks/useFetch';

import "./App.css";

const App = () => {
  const breweries = useFetch("/breweries");

  console.log(breweries);

  return <h1>Hi there</h1>;
};

export default App;
