import React from "react";
import { Link } from "react-router-dom";
import Home from "../../../assets/img/home.png";

export default function HomeReturn() {
  return (
    <div className="home-return-container">
      {" "}
      <Link exact to="/">
        {" "}
        <img 
        src={Home} 
        alt="Return home" 
        className="return-button"/>
      </Link>
    </div>
  );
}
