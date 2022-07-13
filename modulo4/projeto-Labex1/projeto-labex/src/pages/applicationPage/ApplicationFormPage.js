import React, { useEffect, useState } from "react";
import {useNavigate , useParams} from 'react-router-dom'
import axios from "axios";
import { URL_BASE, URL_COUNTRY} from "../../constances/links";
import styled from "styled-components";
import ImagemForms from '../../imagens/imagem2.svg'
import { ContainerApplication, ContainerRight ,ImgForms, NameForm, BotaoForms, PNAME,Select} from "./ApplicationStyled";
import { TextP,Inputs,  } from "../homePage/StyledHome";


const ApplicationForm = (props) =>{
    const navigate = useNavigate()
    const name = localStorage.getItem("name")
    const idTrips = localStorage.getItem("id")
    const [nameUser , setName] = useState("")
    const [age , setAge] = useState("")
    const [applicationText , setApplicationText] = useState("")
    const [profession , setProfession] = useState("")
    const [country , setCountry] = useState([])


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
           setName("") 
           setAge("")
           setApplicationText("")
           setProfession("")
           
            
        }).catch((err)=>{
           console.log(err.res)
        })
    }

    const getCountries = ()=>{
        axios.get(URL_COUNTRY).then((res)=>{
            setCountry(res.data)
            
        }).catch((err)=>{
            console.log(err.response)
        })
    }
    useEffect(() => {
        getCountries();
      }, []);
    return(
        <ContainerApplication> 
           
                <ImgForms src={ImagemForms}/>
          
          <div>
            <NameForm>
            <PNAME>Cadastro para a viagem</PNAME>
            <BotaoForms onClick={()=> navigate(-1)}>Voltar para Viagens</BotaoForms>
            </NameForm>
          
             <ContainerRight>
                 <PNAME>
                    {name}
                </PNAME>
              
                <Inputs 
                value={nameUser}
                placeholder="Nome"
                onChange={onChangeName}
                />
                <Inputs
                value={age}
                 placeholder="Idade"
                 onChange={onChangeAge}
                />
                <Inputs
                
                value={applicationText} 
                placeholder="Texto de candidatura"
                onChange={onChangeApplicationText}
                />
                <Inputs
                value={profession}
                 placeholder="Profissão"
                 onChange={onChangeProfession}
                 />
                 <Select>
                 {country.map((country, index) => {
                    return (
                        <option key={index} value={country.nome}>
                        {country.nome}
                        </option>
                );
                })}
                 </Select>
                 <BotaoForms onClick={()=>getApplyTrips(idTrips)}>Enviar Formulario</BotaoForms>
            </ContainerRight>
            

          </div>
            
        
       
         
        </ContainerApplication>
    )
}

export default ApplicationForm;