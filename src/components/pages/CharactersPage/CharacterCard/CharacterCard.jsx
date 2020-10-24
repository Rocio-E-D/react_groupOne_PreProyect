import React from 'react';

export default function CharacterCard(props) {

    //es el style del hijo card al padre characterpage
    return (
       

        <div className="row">
            {props.characters.map((character,index)=>
            <div className="col-4">
                <figure>
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