import React from "react";
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"
import { goToListTrip , goToAdminPage } from "../../coordination/Coordination";
import {ContainerHome , ContainerOne , Div} from './StyledHome'



const HomePage = () =>{
    const navigate = useNavigate()
    return (
        <ContainerHome>
            <ContainerOne>
                <h1>LabeX</h1>
                <p>Revolucionando as Viagens interplanetarias</p>
            </ContainerOne>
            <Div>
                

                <button onClick={()=> goToListTrip(navigate)} >Viagens</button>
        
            --------Entrar como administrador---------
                <input/>
                <input/>
                <button  onClick={()=> goToAdminPage(navigate)} >Entrar</button>
            </Div>
        </ContainerHome>
    )
}

export default HomePage