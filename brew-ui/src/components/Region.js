import React, {Fragment} from "react";
import {Link, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Region = () => {
  const {regionName} = useParams();
  const {places = []} = useFetch(`/regions/${regionName}`);

  return (
    <Fragment>
      <h1>{regionName}</h1>
      <h2> Places:</h2>
      <ul>
        {
          places.map(place =>
            <li key={place}>
              <Link to={`${regionName}/places/${place}`}>
                {place}
              </Link>
            </li>)
        }
      </ul>

    </Fragment>
  )
};

export default Region;
