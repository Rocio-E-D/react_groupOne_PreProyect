import React, { useState, useEffect } from 'react';
//se extrae del paquete axios
import axios from 'axios';

//Nos va a permitir renderizar el componente hijo
import CharacterCard from './CharacterCard/CharacterCard';

//En esta variable guardará los datos del fecth
let allCharacters = [];

export default function CharactersPage() {
    //Se estructura los Hooks 
    //Use state - 

    //Investigar--
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'characters/')
        .then(res => {
            //
            allCharacters=res.data;
            setCharacters(res.data);
            // console.log(allCharacters);
            console.log(allCharacters);
        })
        .catch(function (error) {
            console.log(error);
        });
    } ,[] //Esto ayuda a que no haga repiticiones infinitas
    )

    return (
        <div>
            <p>¿Qué Amiibo quieres encontrar?</p>
            {/* Esto sirve para conectar al padre componenete con el hijo  */}
            <CharacterCard characters={characters} />
        </div>
    )
}



   // axios.get(process.env.REACT_APP_BACK_URL + 'characters/')
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch (function (error) {
        //         console.log(error);
        // })




        //se genera el enlace a la API 
        // axios.get(process.env.REACT_APP_BACK_URL + 'characters/')
        //     //Se le indica lo que deseas obtener
        //     .then(res => {
        //         allCharacters = res.data;
        //         console.log(allCharacters);
        //         setCharacters(res.data);
        //     })
       