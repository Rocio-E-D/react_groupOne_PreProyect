<<<<<<< HEAD
// import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HousesCard from "../HousesPage/HousesCard/HousesCard";
import "./scss/detailpage.scss";

export default function DetailPage(props) {
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
        <h2>{character.name}hola</h2>
        <p></p>
      </figure>

      <div className="row">
        <section className="col-2">
          <h2>{house.name}house</h2>
          <img src={house.logoURL} alt={house.name} />
        </section>

        <section className="col-2">
          <h2>Alianza</h2>
          <p>{character.allegiance}</p>
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
=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  const [myCharDetail, setCharacters] = useState([]);

  const charNameFromURL = useParams().detail;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACK_URL}characters/${charNameFromURL}`)
      .then((res) => {
        const myCharDetail = res.data;
        setCharacters(myCharDetail);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(myCharDetail);

  // const charAllegiances = myCharDetail.map((chars) => chars.allegiances);
  // console.log(charAllegiances);

  return (
    <main>
      <div>
        <img src={myCharDetail.image} alt={myCharDetail.name} />
        <h3>{myCharDetail.name}</h3>
      </div>

      <div>
        <section>
          <h2>CASA</h2>
          <p>AQUI VA LA FOTO DE LA CASA</p>
        </section>

        <section>
          <h2>ALIANZAS</h2>
          {/* {console.log(myc)} */}
          {/* <p>{myCharDetail.map((mappedChars) => mappedChars.allegiances)}</p>; */}
        </section>

        <section>
          <h2>APARICIONES</h2>
          <p></p>
        </section>

        <section>
          <h2>PADRE</h2>
          <p>{myCharDetail.fathergit}</p>
        </section>

        <section>
          <h2>DESCENDIENTES</h2>
          <p></p>
        </section>

        <section>
          <h2>TITULOS</h2>
          <p></p>
>>>>>>> a3271365de97ae95e263b66d2d801dfd85c37439
        </section>
      </div>
    </main>
  );
}
