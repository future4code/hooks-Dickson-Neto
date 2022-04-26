import React from "react";
import './CardPequeno.css'



function CardPequeno (props){
    return(
        <div className="CardPequeno-container">
            <img src={props.imagem}/>
            <h2>{ props.Email }</h2>
            <h2>{props.Endereço}</h2>
        
        </div>
        
    )
}

export default CardPequeno;