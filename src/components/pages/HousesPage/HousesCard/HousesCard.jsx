import React from "react";
import { Link } from "react-router-dom";

export default function HousesCard(props) {
  return (
    <div className="row">
      {props.houses.map((house, index) => (
        <div className="col-4">
          <figure>
            <Link to={`/house/${house.name}`}> {house.name} </Link>
            <Link to={`/house/${house.name}`}>
              {" "}
              <img  src={house.logoURL} alt={house.name} />{" "}
            </Link>
          </figure>
        </div>
      ))}
    </div>
  );
}

     
        
          
      

  // }

  // return (
  //   <div className="row">
  //     {props.houses.map((house, index) => (
        

  //       <div className="col-4">
  //         <figure>
  //           <Link to={`${house.name}`}> {house.name} </Link>
  //           <Link to={`${house.name}`}>
  //             {" "}
  //             <img src={house.logoURL} alt={house.name} />{" "}
  //           </Link>
  //         </figure>
  //       </div>

  //     ))}
  //   </div>
  // );


