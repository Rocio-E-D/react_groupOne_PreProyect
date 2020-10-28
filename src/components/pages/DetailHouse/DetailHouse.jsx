// import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import HousesCard from "../HousesPage/HousesCard/HousesCard";
import "./scss/detailhouse.scss";

export default function DetailHouse(props) {
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

  console.log(house.titles);

  return (
    <main className="container-hpuse">
      
      <figure className="col-1">
        <img src={house[0].logoURL} alt={house[0].name} />
        <h2>{house[0].name}</h2>
        <p></p>
      </figure>

      <div className="row">
        <section className="col-2">
          <h2>Lema</h2>
          <p>{house[0].sigil}</p>
        </section>

        <section className="col-2">
          <h2>Sede</h2>
          <p>{house[0].seat}</p>
        </section>

        <section className="col-2">
          <h2>Región</h2>
          <p>{house[0].region}</p>
        </section>

        <section className="col-2">
          <h2>Alianzas</h2>
          <p>{house[0].allegiances}</p>
        </section>

        <section className="col-2">
          <h2>Religiones</h2>
          <p>{house[0].religion}</p>
        </section>

        <section className="col-2">
          <h2>Fundación</h2>
          <p>{house[0].createdAt}</p>
        </section>
      </div>
    </main>
  );
}
