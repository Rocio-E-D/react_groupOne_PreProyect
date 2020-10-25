import React from "react";
// import backgroundImage from '../../../assets/img/BackgroundHome.jpg';
// import hcbgImage from "../";
import "./scss/homepage.scss";
// import backgroundImage from '../../../../public/assets/img/Background.jpg'

//bloqueo de ruta - img not working
// import backgroundImage from '../../../../public/assets/img/BackgroundHome.jpg';

export default function HomePage() {
  return (

    <div>
      <h1>Games of Thrones</h1>
      {/* <div style={{ backgroundImage: `url(${backgroundImage})` }} /> */}
      <link rel="stylesheet" href="../../../index.scss" />
      {/* <img  src={backgroundImage} alt="" /> */}
    </div>
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