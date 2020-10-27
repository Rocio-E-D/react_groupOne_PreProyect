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
        </section>
      </div>
    </main>
  );
}
