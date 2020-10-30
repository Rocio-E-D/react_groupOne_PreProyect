import React from "react";
import { Link } from "react-router-dom";
import "../../../index.scss";

export default function NavBar() {
  return (
    <nav className="nav-container">
      {/* Se utiliza etiquetas propias de la biblioteca REACT Router Dom que se asimila = <a href=""></a> */}
      {/* <Link className="nav-link" to="/">
        Home
      </Link> */}
      <Link className="nav-link" to="/characters">
        Personajes
      </Link>
      <Link className="nav-link" to="/houses">
        Casas
      </Link>
      <Link className="nav-link" to="/chronology">
        Cronologia
      </Link>
      {/* //linkeo el search */}
      {/* <Link className="nav-link" activeClassName="active" exact to="/search">
        Search
      </Link> */}
    </nav>
  );
}
