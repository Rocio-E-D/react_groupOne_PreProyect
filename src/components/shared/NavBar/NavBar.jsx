import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="footer-nav">
      {/* Se utiliza etiquetas propias de la biblioteca REACT Router Dom que se asimila = <a href=""></a> */}
      <Link className="footer-nav--links" to="/">
        Home
      </Link>
      <Link className="footer-nav--links" to="/characters">
        Personajes
      </Link>
      <Link className="footer-nav--links" to="/houses">
        Casas
      </Link>
      <Link className="footer-nav--links" to="/chronology">
        Cronologia
      </Link>
      {/* //linkeo el search */}
      <Link
        className="footer-nav--links"
        activeClassName="active"
        exact
        to="/search"
      >
        Search
      </Link>
    </nav>
  );
}
