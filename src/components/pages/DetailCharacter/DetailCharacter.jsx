// import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import HousesCard from "../HousesPage/HousesCard/HousesCard";
import "./scss/detailcharacter.scss";

export default function DetailCharacter(props) {
  const [character, setCharacter] = useState([useParams().character]);
  // const character = useParams().detail;
  console.log(useParams());

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `characters/${character}`)
      .then((res) => {
        // const character = res.data;
        setCharacter(res.data);
      });
    // .catch(function (error) {
    //   console.log(error);
    // });
  }, []);

  const [house, setHouse] = useState([useParams().house]);
  // const character = useParams().detail;
  console.log(useParams());

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + `houses/${house}`)
      .then((res) => {
        // const character = res.data;
        setHouse(res.data);
      });
    // .catch(function (error) {
    //   console.log(error);
    // });
  }, []);

  console.log(character.titles);

  return (
    <main className="container-character">
      <div>{/* foto de casa y nombre de casa */}</div>

      <figure className="col-1">
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        <p></p>
      </figure>

      <div className="row">
        <section className="col-2">
          <h2>{house.name}house</h2>
<<<<<<< HEAD
          <img src={house[0].logoURL} alt={house.name} />
=======
          <p>{character.house}</p>
          <img src={house.logoURL} alt={house.name} />
>>>>>>> 6db4f37aca6d08d36cf0e983ec04b3eb49d01262
        </section>

        <section className="col-2">
          <h2>Alianza</h2>
          <p>{character.allegiances}</p>
        </section>

        <section className="col-2">
          <h2>Apariciones</h2>
          <p>{character.appearances}</p>
        </section>

        <section className="col-2">
          <h2>Padre</h2>
          <p>{character.father}</p>
        </section>

        <section className="col-2">
          <h2>Descendientes</h2>
          <p>{character.siblings}</p>
        </section>

        <section className="col-2">
          <h2>Títulos</h2>
          <p>{character.titles}</p>
        </section>
      </div>
    </main>
  );
}
