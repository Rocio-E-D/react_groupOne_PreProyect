import React from 'react';


export default function CharacterCard(props) {

    //es el style del hijo card al padre characterpage
    return (
       

        <div className="row">
          {/* Hacemos un map que nos aplique el mismo tratamiento a todos los caracteres de nuestro array */}
            {props.characters.map((character,index)=>
            <div className="col-4">
                <figure>
                    {/* esto pinta la carta con un parrafo nombre y la imagen */}
                    <p>
                        {character.name}
                    </p>
                    <img src={character.image} alt={character.name}/>
                </figure>
            </div>
                
            )}
        </div>
        // <div className="row">
        //     {/* function map - aplica las instrucciones que deseamos tener en la array */}
        //     {​​​​​props.map((character, index) =>
        //         <div className="col-4">
        //             <figure>
        //                 <p>{character.name}​​​​​</p>
        //                 <img src={character.image} alt={character.name}​​​​​>
        //             </figure>
        //         </div>
        //     )}
        // </div>
    )
}