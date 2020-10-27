import React, { useState, useEffect } from "react";
import axios from "axios";
import HousesCard from "./HousesCard/HousesCard";

let allHouses = [];

export default function HousesPage() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACK_URL + "houses/")
      .then((res) => {
        allHouses = res.data.filter((house) => house.logoURL); // FILTRA LOS RESULTADOS DEL OBJETO. SOLO PINTA LOS QUE TIENEN logoURL
        setHouses(allHouses);
        console.log(allHouses);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <HousesCard houses={houses} />
    </section>
  );
}
