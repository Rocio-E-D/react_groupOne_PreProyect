import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="row">
      <div className="prueba"> 
        {/* Se utiliza etiquetas propias de la biblioteca REACT Router Dom que se asimila = <a href=""></a> */}
        <Link className="col-4" to="/">
          Home
        </Link>
        <Link className="col-4" to="/characters">
          Personajes
        </Link>
        <Link className="col-4 " to="/houses">
          Casas
        </Link>
        <Link className="col-4 " to="/chronology">
          Cronologia
        </Link>
        {/* //linkeo el search */}
        <Link className="col-4" activeClassName="active" exact to="/search">
          Search
        </Link>
      </div>
    </nav>
  );
}
