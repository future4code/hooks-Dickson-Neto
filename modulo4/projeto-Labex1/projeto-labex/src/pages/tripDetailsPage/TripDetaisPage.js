import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE , headers } from "../../constances/links";
import { navigate, useNavigate, useParams } from "react-router-dom";
import { ContainerAdm, TextH3,} from "../adminPage/AdminStyled";
import {TextName, ListStyle, TextDetails , ContainerDetails} from './DetailsStyles'
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
    const idTrip = localStorage.getItem("id")

    useEffect(()=>{
       
        axios.get(`${URL_BASE}/trip/${params.id}`, headers).then((res) => {
            setDetailsTrip(res.data.trip)
            setCandidates(res.data.trip.candidates)
            setApproved(res.data.trip.approved)
            

        }).catch((err) => {
            console.log(err)
        })
    } , [])
    
    
    const DecideCandidate = (idCandidato)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/dickson-freitas-hooks/trips/${idTrip}/candidates/${idCandidato}/decide`
       
       const body = {
            approve : "true"
       }
        axios.put(url,body , headers ).then((res)=>{
            setCandidates(res.data.candidates.name)
            navigate(`/adminPage/tripDetails/${params.id}`)
        }).catch((err)=>{
            console.log(err.response)
        })  
    }
   
     const candidatesPending = candidates &&  candidates.map((wait)=>{
        return(
            
            <div key={wait.id}>
                
            <ListStyle key={ wait.name} >
           { wait.name}
            <button onClick={()=> DecideCandidate(wait.id)}>Aprovar</button>
            </ListStyle>
            </div>
       )
    })

    const candidatesApproved = approved &&  approved.map((approved)=>{
        return(<div><ListStyle>{approved.name}</ListStyle></div>)
    })
    return (
        
        <ContainerDetails>
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
            <ol>{candidatesPending ? candidatesPending  : <p>Carregando...</p>}</ol>

            <TextDetails>Candidatos aprovados</TextDetails>
            <ol>{candidatesApproved}</ol>
           
           </div>
            <BotaoForms onClick={()=>navigate("/adminPage")}>Voltar</BotaoForms>
        </ContainerDetails>
       
    )
}

export default TripDetails