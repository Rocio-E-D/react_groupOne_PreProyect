import React from "react";
import { Link } from "react-router-dom";

export default function HousesCard(props) {

  // function showProps () {
    
      if (props.houses.logoURL !== false)  {
        console.log(`${props.houses.name}.not image`);
  
      } else { 
        return (
          <div className="row">
            {props.houses.map((house, index) => (
      
              <div className="col-4">
                <figure>
                  <Link to={`${house.name}`}> {house.name} </Link>
                  <Link to={`${house.name}`}>
                    {" "}
                    <img src={house.logoURL} alt={house.name} />{" "}
                  </Link>
                </figure>
              </div>
            ))}
          </div>

        )
      }
        

      
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


