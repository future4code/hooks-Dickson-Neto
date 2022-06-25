import React from "react";
import styled from 'styled-components'
import axios from "axios";
import {URL_BASE} from '../../constances/links'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToListTrip} from "../../coordination/Coordination";
import {ContainerHome , ContainerOne , PlanetImg ,Div , TextH1 ,TextP,Botoes, BotaoForms ,Inputs} from './StyledHome'
import ImagemPrincipal from '../../imagens/undraw_world_re_768g.svg'



const HomePage = () =>{
    const [inputEmail , setInputEmail] = useState("")
    const [inputPassword , setInputPassoword] = useState("")
    const navigate = useNavigate()

    const onChangeEmail = (event)=>{
        setInputEmail(event.target.value)
    }
    const onChangePassword = (event)=>{
        setInputPassoword(event.target.value)
    }

    const submitLogin = () =>{
      
        const body = {
            email : inputEmail,
            password : inputPassword,
        }
        axios.post(`${URL_BASE}/login`, body).then((res)=>{
            localStorage.setItem("token",res.data.token)
            navigate("/adminPage")
            // setInputEmail("")
            // setInputPassoword("")
        }).catch((err)=>{
            console.log(err.response.data)
        })
    }

    return (
        <ContainerHome>
            <ContainerOne>
                <TextH1>LabeX</TextH1>
                <TextP>Revolucionando as Viagens interplanetarias</TextP>
                <PlanetImg src={ImagemPrincipal}/>
            </ContainerOne>
            <Div> 
                <Botoes onClick={()=> goToListTrip(navigate)} >Ver Viagens</Botoes>

               <TextP>
              Entrar como Administrador
                </TextP> 
                    <Inputs
                        onChange={onChangeEmail}
                        value={inputEmail}
                        placeholder="Email"
                    />
                    <Inputs
                        type="password"
                        onChange={onChangePassword}
                        value={inputPassword}
                        placeholder="Senha" 
                    />
                    <BotaoForms  onClick={()=>submitLogin()} >Entrar</BotaoForms>
                
            
                
            </Div>
        </ContainerHome>
    )
}

export default HomePage