import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios'
import { CardTrips , TextCard,Span , BotaoInscreva } from "./StyledTrips";
import { BotaoHome } from "../../pages/listTripPage/ListTripPageStyled";
import { GlobalStyleComponent } from "styled-components";

const TripsComponents = (props)=>{
     const navigate = useNavigate()
    const [idTrips , setIdTrips] = useState([])
  
   

    const getApplyTrips = (id) => {
       if(id === props.trips.id){
            navigate("applicationForm") 
            localStorage.setItem("id" , props.trips.id)
            localStorage.setItem("name" ,  props.trips.name)
            
          
        }

    }
        
      
    return(
        // onClick={()=>goToApplicationForm(navigate)
        <CardTrips key = {props.trips.id}>  
             <TextCard><Span>Nome:</Span>{props.trips.name}  </TextCard> 
             <TextCard>
                <Span>Planeta:</Span> 
                {props.trips.planet}
                </TextCard>
             
             <TextCard><Span>Descrição</Span> {props.trips.description}</TextCard>
             <TextCard><Span>Duração:</Span>{props.trips.durationInDays} dias</TextCard>
             <TextCard><Span>Data:</Span> {props.trips.date}</TextCard>
             <BotaoHome onClick={()=>getApplyTrips(props.trips.id)}>Inscrever-se</BotaoHome>
             
        </CardTrips>
        
    )

    }
export default TripsComponents


