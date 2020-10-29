import React from "react";
import { Link } from "react-router-dom";
import "../../../../index.scss";

export default function HousesCard(props) {
  return (
    <div className="row">
      {props.houses.map((house, index) => (
        <div className="col-4">
          <figure>
            <Link to={`/house/${house.name}`}> 
              <h2>{house.name}</h2>
              <img  src={house.logoURL} alt={house.name} />
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


