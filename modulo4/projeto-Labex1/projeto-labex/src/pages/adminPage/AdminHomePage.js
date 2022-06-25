import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { headers, URL_BASE } from '../../constances/links'
import { backHomePage } from "../../coordination/Coordination";
import { CardTrips, TextCard } from "../../components/ListTripComponents/StyledTrips";
import {ContainerAdm} from './AdminStyled'
import {TextH3 , Div} from './AdminStyled'
import { BotaoForms } from "../applicationPage/ApplicationStyled";

const AdminPage = (props) => {
    const navigate = useNavigate()
    const [getDetais, setGetDetails] = useState([])
    const [detailsTrips, setDetailsTrip] = useState({})
    const params = useParams


    useEffect(() => {
        getTripList()
    }, [])
   
   
    const getTripList = () => {
        axios.get(`${URL_BASE}/trips`).then((res) => {
            setGetDetails(res.data.trips)
        }).catch((err) => {
            console.log(err.response)
        })
    }

   const delTrips = (delId) =>{
    axios.delete(`${URL_BASE}/trips/${delId}` , headers)
    .then(()=>{
        alert("Viagem apagada com sucesso")
        navigate("/adminPage")
    }).catch(()=>{
        alert("Tente novamente mais tarde")
    })
   }

   
    
    return (
        <ContainerAdm>

            <div>
            <TextH3>Painel Administrativo</TextH3>


            </div>
            
            <Div>
                <BotaoForms onClick={() => backHomePage(navigate)}>Home</BotaoForms>
                <BotaoForms onClick={() => navigate("/adminPage/CreateTrip")}>Criar Viagens</BotaoForms>
                <BotaoForms onClick={() => navigate("/")} >Logout</BotaoForms>
            </Div>
            


            {getDetais.map((trips) => {
                return <CardTrips onClick={()=>navigate(`/adminPage/tripDetails/${trips.id}`)} key={trips.id}>
                     <TextCard>{trips.name}
                        </TextCard>  
                    <BotaoForms onClick={()=>delTrips(trips.id)}>Apagar viagem</BotaoForms>
                </CardTrips>
            })}   
              
        </ContainerAdm>
    )
}

export default AdminPage