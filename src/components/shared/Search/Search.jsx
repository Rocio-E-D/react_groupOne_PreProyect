import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./../../../components/pages/CharactersPage/CharacterCard/CharacterCard";

// let allCharacters = [];
let allCharacters = [];

export const Search = () => {

    const [characters, setCharacters] = useState([]);

    const handleSearch = () => {
        console.log()
    }

    useEffect(
        () => {
            axios
                .get(process.env.REACT_APP_BACK_URL + "search/")
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

    // creo la pantalla seach con un form que contiene un boton 
    // ,un input y debajo, no se muy bien para que es el .map(),
    // y renderizo el componente carta, ya que será el resultado de nuestra busqueda
    return (
        <div>
            <h1>Search Screen</h1>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder="Find your hero"
                            className="form-control" />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">

                            Search...
                            </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr />
                    {
                        allCharacters.map(character =>
                            <CharacterCard characters={characters}
                                key={character.name}
                                {...character} />)
                        // characters={characters}
                    }
                    {/* <Link to={`./search/${character.name}`}>
                        <h2>{character.name} </h2>
                        <img src={character.image} alt={character.name} />
                    </Link> */}


                </div>
            </div>
        </div>

    )
}
