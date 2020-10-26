import React from "react";
// import backgroundImage from '../../../assets/img/BackgroundHome.jpg';
// import hcbgImage from "../";
import "./scss/homestyle.scss";
// import backgroundImage from '../../../../public/assets/img/Background.jpg'

//bloqueo de ruta - img not working
// import backgroundImage from '../../../../public/assets/img/BackgroundHome.jpg';

export default function HomePage() {
  return (
    //Esta tag es para englobar aquello que vaya aparte del nav y las secciones
    <main>
      <h1>Games of Thrones </h1>
      {/* <div style={{ backgroundImage: `url(${backgroundImage})` }} /> */}
      {/* <link rel="stylesheet" href="../../../homestyle.scss" /> */}
      {/* <img  src={backgroundImage} alt="" /> */}
    </main>
  )


}
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