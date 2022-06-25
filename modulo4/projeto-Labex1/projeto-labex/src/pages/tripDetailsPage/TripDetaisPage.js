import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE , headers } from "../../constances/links";
import { navigate, useNavigate, useParams } from "react-router-dom";
import { ContainerAdm, TextH3,} from "../adminPage/AdminStyled";
import {TextName, ListStyle, TextDetails} from './DetailsStyles'
import { Span } from "../../components/ListTripComponents/StyledTrips";
import { BotaoForms } from "../applicationPage/ApplicationStyled";



const TripDetails = (props) =>{
    // const token = localStorage.getItem("token")
    const [detailsTrips , setDetailsTrip] = useState({})
    const [candidates , setCandidates] = useState([])
    const [approved , setApproved] = useState([])
    // const [testeCondicional , setTests] = useState(null)
    const navigate = useNavigate("")
    const params = useParams()

    useEffect(()=>{
       
        axios.get(`${URL_BASE}/trip/${params.id}`, headers).then((res) => {
            setDetailsTrip(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
            console.log(res.data.trip)

        }).catch((err) => {
            console.log(err)
        })
    } , [])
    
    const DecideCandidate = (idCandidato)=>{
        const idTrip = localStorage.getItem("id")
       const body = {
            approve : "true"
       }
        axios.put(`${URL_BASE}/trips/${idTrip}/candidates/${idCandidato}/decide`,body , headers ).then(()=>{
            setApproved()
        }).catch((err)=>{
            console.log(err.response)
        })  
    }
   
     
    return (
        
        <ContainerAdm>
            <TextH3>Detalhes da Viagem:  </TextH3>
            <div>
                 <TextName>
                 {detailsTrips.name}
                </TextName>
              
            </div> 
            <div>
            
                <TextName>
                <Span>Data</Span>
                { detailsTrips.date}    
                </TextName>
            </div>

            <div>
                <TextName>
                <Span>Descrição</Span>

              {detailsTrips.description}
                </TextName>
            </div>

            <div>
              <TextName>
                <Span>Planeta</Span>
                 { detailsTrips.planet}
              </TextName>
            </div>
           <div>    
            <TextDetails>Candidatos Pendentes</TextDetails>
            {candidates.map((wait)=>{
                return(
                    
                    <div >
                        
                    <ListStyle key={ wait.name} >
                   { wait.name}
                    <button onClick={()=> DecideCandidate(wait.id)}>Aprovar</button>
                    </ListStyle>
                    </div>
               )
            })}

            <TextDetails>Candidatos aprovados</TextDetails>
            {approved.map((approved)=>{
                return(<div><ListStyle>{approved.name}</ListStyle></div>)
            })}

           </div>
            <BotaoForms onClick={()=>navigate("/adminPage")}>Voltar</BotaoForms>
        </ContainerAdm>
       
    )
}

export default TripDetails