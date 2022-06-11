import React from "react";
import axios from "axios";
import { URL_BASE } from "../services/links";
import Lixeira from '../../imagens/lixeira.png'
import DelStyled from './DelStyled'
import { Imagens } from "./DelStyled";

export default class DeleteMatches extends React.Component{
    delMatches = () =>{
        axios.put(`${URL_BASE}/clear`).then((res)=>alert("Todos os matches foram apagados")).catch((err)=>console.log(err.response))

    }
render(){

   
    return(        
    <div>
        <Imagens src={Lixeira} alt="Lixeira" onClick={this.delMatches}/>
    </div>
        )
 }
}