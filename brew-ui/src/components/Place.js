import React, {Fragment} from "react";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Place = () => {
  const {placeName} = useParams();
  const breweries = useFetch(`/breweries?place=${placeName}`);

  console.log(breweries);
  return (
    <Fragment>
      <h1>{placeName}</h1>
      <h2> Breweries:</h2>
      <ul>
        {
          breweries.map(brewery => (
            <li key={brewery._id}>
              <a href={brewery.url} target="_blank">{brewery.name}</a> | {brewery.address}
            </li>
          ))
        }
      </ul>

    </Fragment>
  )
};

export default Place;
