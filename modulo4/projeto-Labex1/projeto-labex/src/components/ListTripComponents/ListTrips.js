import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationForm } from "../../coordination/Coordination";
import styled from "styled-components";
import axios from 'axios'
import { CardTrips } from "./StyledTrips";
import { GlobalStyleComponent } from "styled-components";
import { URL_BASE } from "../../constances/links";
import ApplicationForm from "../../pages/applicationPage/ApplicationFormPage";

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
             <p>Nome: {props.trips.name}  </p> 
             <p>Planeta: {props.trips.planet}</p>
             <p>Descrição: {props.trips.description}</p>
             <p>Duração: {props.trips.durationInDays} dias</p>
             <p>Data: {props.trips.date}</p>
             <button onClick={()=>getApplyTrips(props.trips.id)}>Inscrever-se</button>
             
        </CardTrips>
        
    )

    }
export default TripsComponents


