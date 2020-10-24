import React from "react";
import { Link } from "react-router-dom";

export default function HousesCard(props) {
  return (
    <div className="row">
      {props.houses.map((house, index) => (
        <div className="col-4">
          <figure>
            <Link to={`${house.slug}`}> {house.name} </Link>
            <img src={house.logoURL} alt={house.name} />
          </figure>
        </div>
      ))}
    </div>
  );
}
