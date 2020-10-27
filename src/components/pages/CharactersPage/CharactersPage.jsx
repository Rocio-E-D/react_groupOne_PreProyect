import React, { useState, useEffect } from "react";
// import "./scss/characterstyle.scss";
import axios from "axios";

//Nos va a permitir renderizar el componente hijo
import CharacterCard from "./CharacterCard/CharacterCard";

//En esta variable guardará los datos del fecth
let allCharacters = [];

export default function CharactersPage() {

  const [characters, setCharacters] = useState([]);

  useEffect(
    () => {
      axios
        .get(process.env.REACT_APP_BACK_URL + "characters/")
        .then((res) => {
          allCharacters = res.data;
          //ejecutamos una funcion setCharacters con el contenido de datos de nuestro fetch( axios.get) y lo pintamos en consola
          setCharacters(allCharacters);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [] //Esto ayuda a que no haga repiticiones infinitas
  );

  return (
    <section>
      <article>
        {/* Esto sirve para conectar al padre componenete con el hijo  */}
        <CharacterCard characters={characters} />
      </article>
    </section>
  );
}