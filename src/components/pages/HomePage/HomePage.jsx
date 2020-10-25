import React from "react";
//bloqueo de ruta - img not working
import backgroundImage from '../../../assets/img/BackgroundHome.jpg';
<link rel="stylesheet" href="../../../index.scss"/>
export default function HomePage() {
  return (
    <img className="img-fluid" src={backgroundImage} alt=""/>
    
  );
}

// ./src/components/pages/HomePage/HomePage.jsx
// Module not found: You attempted to import ../../../../public/assets/img/BackgroundHome.jpg which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
