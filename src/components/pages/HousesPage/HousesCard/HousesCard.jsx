import React from 'react';

export default function HousesCard(props) {


    return (
       

        <div className="row">
     
            {props.houses.map((house,index)=>
            <div className="col-4">
                <figure>
                
                    <p>
                        {house.name}
                    </p>
                    <img src={house.logoURL} alt={house.name}/>
                </figure>
            </div>
                
            )}
        </div>
       
    )
}