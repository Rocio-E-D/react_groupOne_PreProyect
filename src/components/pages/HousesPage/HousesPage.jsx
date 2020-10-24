import React, { useState, useEffect } from 'react';

import axios from 'axios';

import HousesCard from './HousesCard/HousesCard';

let allHouses = [];

export default function HousesPage() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK_URL + 'houses/')
            .then(res => {
                //
                allHouses = res.data;

                setHouses(allHouses);
                console.log(allHouses);


            })
            .catch(function (error) {
                console.log(error);
            });
    }, []
    )

    return (
        <div>
            <p>Toma personaje, quieres más</p>

            <HousesCard houses={houses} />
        </div>
    )
}
