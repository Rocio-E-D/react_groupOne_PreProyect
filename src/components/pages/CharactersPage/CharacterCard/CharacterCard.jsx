import React from "react";
import { Link } from "react-router-dom";
// import CharacterPage from "../CharacterPage/CharacterPage"

export default function CharacterCard(props) {

  // const CharacterDetail = ({
  //   house,
  //   allegiances,
  //   mentions,
  //   father,
  //   siblings,
  //   titles,
  // }) => {
  //es el style del hijo card al padre characterpage
  return (
    <div className="row">
      {/* Hacemos un map que nos aplique el mismo tratamiento a todos los caracteres de nuestro array */}

      {props.characters.map((character, index) => (
        <figure className="col-4">
          {/* esto pinta la carta con un parrafo nombre y la imagen */}

          <Link to={`./detail/${character.name}`}> {character.name} </Link>
          <Link to={`./detail/${character.name}`}>
            {" "}
            <img src={character.image} alt={character.name} />{" "}
          </Link>
        </figure>
      ))}
    </div>

  

    
  );
}
