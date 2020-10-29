import React from "react";
import { Link } from "react-router-dom";
import "../../../../index.scss";

export default function CharacterCard(props) {
  return (
    <div className="card-container">
      {/* Hacemos un map que nos aplique el mismo tratamiento a todos los caracteres de nuestro array */}
      {props.characters.map((character, index) => (
        <figure>
          {/* esto pinta la carta con un parrafo nombre y la imagen */}
          {/* se enlaza con la ruta del app.jsx del DetailPage */}
          <Link to={`./character/${character.name}`}>
            <h2>{character.name} </h2>
            <img src={character.image} alt={character.name} />
          </Link>
        </figure>
      ))}
    </div>
  );
}
