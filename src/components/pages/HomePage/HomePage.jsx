import React from "react";
import "../../../index.scss";

export default function HomePage() {
  return (
    //Esta tag es para englobar aquello que vaya aparte del nav y las secciones
    <main className="background-image">
      <h1 className="homepage-title">Game of Thrones </h1>
    </main>
  );
}

// {/* <div style={{ backgroundImage: `url(${backgroundImage})` }} /> */}
//     {/* <link rel="stylesheet" href="../../../homestyle.scss" /> */}
//     {/* <img  src={backgroundImage} alt="" /> */}

// <img src={backgroundImage} alt=""/>
// <div>
//        class="bg_image"
//   style={{
//     backgroundImage: `url(${hcbgImage})`,
//     backgroundSize: "cover",
//     height: "100vh",
//     color: "#f5f5f5"
//   }}
// >
