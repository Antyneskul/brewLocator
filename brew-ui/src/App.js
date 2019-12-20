import React from "react";
import useFetch from './hooks/useFetch';

import "./App.css";
import {Link} from "react-router-dom";

const App = () => {
  const regions = useFetch("/regions");

  return (
    <ul>
      {regions.map(el =>
        <li key={el._id}>
          <Link to={`regions/${el.name}`}>
            {el.name}
          </Link>
        </li>
      )}
    </ul>
  );
};

export default App;
