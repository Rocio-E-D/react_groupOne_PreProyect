import React from "react";
import { Link } from "react-router-dom";

export default function HousesCard(props) {
  return (
    <div className="row">
      {props.houses.map((house, index) => (
        <div className="col-4">
          <figure>
            {/* <Link to={`${house.name}`}> {house.name} </Link> */}
            {/* Antigua manera de enrutar a partir del .name */}

            <p>{house.name}</p>
            <a href={`${house.name}`}>
              <img src={house.logoURL} alt={house.name} />
            </a>
          </figure>
        </div>
      ))}
    </div>
  );
}
