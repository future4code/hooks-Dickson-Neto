import React from "react";
import Style from './StyleHeader'
import Appnamoro from '../../imagens/appnamoro.png'
import { Para , Imagens , DivHeader } from "./StyleHeader";


const Header = (props) =>{
    return (

    <DivHeader>

    <Para>astroMatch</Para>

        <Imagens src={Appnamoro}
    onClick={props.goToDoList}/>

    </DivHeader>
    
    )
}

export default Header;