import React, {useState , useEffect} from "react"
import axios from "axios"
import { URL_BASE , headers } from "../../constances/links"
import { navigate, useNavigate } from "react-router-dom"
import { Inputs } from "../homePage/StyledHome"
import { TextH3 , FormsCreate , DivButton, SelectForm, ContainerForms } from "./AdminStyled"
import { BotaoForms } from "../applicationPage/ApplicationStyled"


const CreateTrip = () =>{
    const [nameUser, setNameUser] = useState([])
    const [planetUser, setplanetUser] = useState([])
    const [dateUser, setDateUser] = useState([])
    const [ descriptionUser, setDescriptionUser] = useState()
    const [durationUser, setDurationUser] = useState([])
    const navigate = useNavigate("")


    const createTrips = ()=>{
       const body = {
        name: nameUser ,
        planet: planetUser,
        date: dateUser,
        description: descriptionUser,
        durationInDays: durationUser
       }
        axios.post(`${URL_BASE}/trips`,body, headers).then((res)=>{
            navigate("/adminPage")
        }).catch((err)=>{
            console.log(err)
        })
    }

    const onChangeName = (event) =>{
        setNameUser(event.target.value)
    }
    const onChangePlanet = (event) =>{
        setplanetUser(event.target.value)
    }
    const onChangeDate = (event) =>{
        setDateUser(event.target.value)
    }
    const onChangeDescription = (event) =>{
        setDescriptionUser(event.target.value)
    }
    const onChangeDuration = (event) =>{
        setDurationUser(event.target.value)
    }
    return(
        <ContainerForms>
           <TextH3>Criar Viagem</TextH3>
           <FormsCreate>
                <Inputs 
                value={nameUser}
                placeholder="Nome"
                onChange={onChangeName}
                 />
               <SelectForm  value={planetUser} onChange={onChangePlanet}>
                <option>Mercurio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Jupiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutao</option>
               </SelectForm>
                <Inputs 
                 type="date"
                value={dateUser}
                placeholder="Data"
                onChange={onChangeDate}
                 />
                <Inputs 
                value={descriptionUser}
                placeholder="Descrição"
                onChange={onChangeDescription}
                
                 />
                <Inputs 
                value={durationUser}
                placeholder="Duração"
                onChange={onChangeDuration}
                 />
           </FormsCreate>
           <DivButton>
                <BotaoForms onClick={()=>createTrips()}>Criar</BotaoForms>
                 <BotaoForms onClick={()=> navigate("/adminPage")}>Voltar</BotaoForms>

           </DivButton>
        


        </ContainerForms>
    )
}

export default CreateTrip   