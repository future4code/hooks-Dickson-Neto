import React, { useState } from "react";
import {useNavigate , useParams} from 'react-router-dom'
import { goToListTrip } from "../../coordination/Coordination";
import axios from "axios";
import { URL_BASE } from "../../constances/links";
import Countries from "../../components/countries";


const ApplicationForm = (props) =>{
    const navigate = useNavigate()
    const name = localStorage.getItem("name")
    const idTrips = localStorage.getItem("id")
    const [nameUser , setName] = useState("")
    const [age , setAge] = useState("")
    const [applicationText , setApplicationText] = useState("")
    const [profession , setProfession] = useState("")
    const [country , setCountry] = useState("")


    const onChangeName = (event)=>{
        setName(event.target.value)
    }
    const onChangeAge = (event)=>{
        setAge(event.target.value)
    }
    const onChangeApplicationText = (event)=>{
        setApplicationText(event.target.value)
    }
    const onChangeProfession = (event)=>{
        setProfession(event.target.value)
    }
    const onCountry = (event)=>{
        setCountry(event.target.value)
    }
     const getApplyTrips = (id)=>{
        const body = {
            name : nameUser,
            age : age,
            applicationText : applicationText,
            profession : profession,
            country : country

        }
        axios.post(`${URL_BASE}/trips/${id}/apply` , body).then((res)=>{
           alert("Inscrição concluida com sucesso...Boa sorte!")
        }).catch((err)=>{
           console.log(err.res)
        })
    }
    return(
        <div>
          
            <form>
                 {name}
              
                <input 
                value={nameUser}
                placeholder="Nome"
                onChange={onChangeName}
                />
                <input
                value={age}
                 placeholder="Idade"
                 onChange={onChangeAge}
                />
                <input
                value={applicationText} 
                placeholder="Texto de candidatura"
                onChange={onChangeApplicationText}
                />
                <input
                value={profession}
                 placeholder="Profissão"
                 onChange={onChangeProfession}
                 />
                <input
                 value={country}
                 placeholder="Nacionalidade"
                 onChange={onCountry}
                 />
            
               
            </form>
            <button onClick={()=>getApplyTrips(idTrips)}>Enviar Formulario</button>
         Pagina Cadastro de viagens
         <button onClick={()=> navigate(-1)}>Voltar para ListTrip</button>
         
        </div>
    )
}

export default ApplicationForm;