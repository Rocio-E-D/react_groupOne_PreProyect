import React from "react";
import hcbgImage from "../../../../public/assets/img/";
import "./scss/homepage.scss";
// import backgroundImage from '../../../../public/assets/img/Background.jpg'

//bloqueo de ruta - img not working
// import backgroundImage from '../../../../public/assets/img/BackgroundHome.jpg';

export default function HomePage() {
  return (
    // <img src={backgroundImage} alt=""/>
    <div>
           class="bg_image"
      style={{
        backgroundImage: `url(${hcbgImage})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}
    >
      <h1>Games of Thrones</h1>
      {/* <div style={{ backgroundImage: `url(${backgroundImage})` }} /> */}
    </div>

    // , module: {
    //   rules: [
    //     {
    //       test:/\.(png|jpg|gif)$/,
    //       loader: 'url-loader'
    //     }
    //   ]
    // }
   

  )
}