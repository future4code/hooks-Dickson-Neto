import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate , useParams} from 'react-router-dom'
import TripsComponents from "../../components/ListTripComponents/ListTrips";
import { URL_BASE } from "../../constances/links";
import { goToApplicationForm, backHomePage } from "../../coordination/Coordination";
import styled from "styled-components";
import { ContainerCard } from "./ListTripPageStyled";
import { ContainerListTrip, DivTrips,TextTrip, BotaoHome } from './ListTripPageStyled'


const ListTrips = () =>{
    const navigate = useNavigate()
    const params = useParams
    const [tripsList, setTripsList] = useState([])

    useEffect(()=>{
        getTripList()
    }, [])
    const getTripList = ()=>{
        axios.get(`${URL_BASE}/trips`).then((res)=>{
            setTripsList(res.data.trips)
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    return (
        <ContainerListTrip>
            <DivTrips>
            <TextTrip>
                Lista de Viagens
            </TextTrip>
            <BotaoHome onClick={()=> backHomePage(navigate)}>Home</BotaoHome>
            </DivTrips>
            
           <div>
           {tripsList.map((trips)=>{
                return <ContainerCard>
                    <TripsComponents trips = {trips}/>
                    
                </ContainerCard>
            })}
           

           </div>
          
        </ContainerListTrip>
    )
}

export default ListTrips