// import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
// import { Link } from "react-router-dom";

 import React, { useState, useEffect } from "react";
 import { useParams } from "react-router-dom";
 import axios from "axios";


 export default function DetailPage(props) {
  return(
    <p>esta es la detail page</p>
  )
 }

 //  const [house, setHouse] = useState([useParams().house]);
// console.log()
//     useEffect(() => {
//       axios
//         .get(process.env.REACT_APP_BACK_URL + `houses/${house}`)
//         .then((res) => {
//           house = res.data;
//           setHouse(house);
     
          
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     }, []);
//     console.log(house.allegiances);
  // return (
//       <main>
//         <div>
// {/* foto de casa y nombre de casa */}
//         </div>
//         <div>
//           <section>
//             <h2>
//               {house.name}hola
//             </h2>
//             <p></p>
//           </section>
//           <section>
//             <h2>
//               Carta 2
//             </h2>
//             <p></p>
//           </section>
//           <section>
//             <h2>
//               Carta 3
//             </h2>
//             <p></p>
//           </section>
//           <section>
//             <h2>
//               Carta 4
//             </h2>
//             <p></p>
//           </section>
//           <section>
//             <h2>
//               Carta 5
//             </h2>
//             <p></p>
//           </section>
//           <section>
//             <h2>
//               Carta 6
//             </h2>
//             <p></p>
//           </section>
          

//         </div>
//       </main>
  
      
//  );