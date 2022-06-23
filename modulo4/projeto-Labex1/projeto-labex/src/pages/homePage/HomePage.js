import React from "react";
import styled from 'styled-components'
import axios from "axios";
import {URL_BASE} from '../../constances/links'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToListTrip} from "../../coordination/Coordination";
import {ContainerHome , ContainerOne , Div} from './StyledHome'



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
                <h1>LabeX</h1>
                <p>Revolucionando as Viagens interplanetarias</p>
            </ContainerOne>
            <Div>
                

                <button onClick={()=> goToListTrip(navigate)} >Viagens</button>
        
            --------Entrar como administrador---------
                <input
                    onChange={onChangeEmail}
                    value={inputEmail}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={onChangePassword}
                    value={inputPassword}
                    placeholder="Senha" 
                />
                <button  onClick={()=>submitLogin()} >Entrar</button>
            </Div>
        </ContainerHome>
    )
}

export default HomePage