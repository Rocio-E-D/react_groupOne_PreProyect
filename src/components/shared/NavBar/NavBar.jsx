import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            {/* Se utiliza etiquetas propias de la biblioteca REACT Router Dom que se asimila = <a href=""></a> */}
            <Link to="/"> Home</Link>
            <Link to="/characters"> Personajes</Link>
            <Link to="/houses"> Casas </Link>
            <Link to="/chronology"> Cronología</Link>
        </nav>
    )
}