import React, {useState , useEffect} from "react"
import axios from "axios"
import { URL_BASE , headers } from "../../constances/links"


const CreateTrip = () =>{
    const [nameUser, setNameUser] = useState("")
    const [planetUser, setplanetUser] = useState("")
    const [dateUser, setDateUser] = useState("")
    const [ descriptionUser, setDescriptionUser] = useState("")
    const [durationUser, setDurationUser] = useState("")


    const createTrips = ()=>{
       const body = {
        name: nameUser ,
        planet: planetUser,
        date: dateUser,
        description: descriptionUser,
        durationInDays: durationUser
       }
        axios.post(`${URL_BASE}/trips`,body, headers).then((res)=>{
            console.log(res)
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
        <div>
           <h2>Criar Viagem</h2>
           <form>
                <input 
                value={nameUser}
                placeholder="Nome"
                onChange={onChangeName}
                 />
               <select  value={planetUser} onChange={onChangePlanet}>
                <option>Mercurio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Jupiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutao</option>
               </select>
                <input 
                 type="date"
                value={dateUser}
                placeholder="Data"
                onChange={onChangeDate}
                 />
                <input 
                value={descriptionUser}
                placeholder="Descrição"
                onChange={onChangeDescription}
                
                 />
                <input 
                value={durationUser}
                placeholder="Duração"
                onChange={onChangeDuration}
                 />
           </form>
        <button onClick={()=>createTrips()}>Criar</button>
        <button>Voltar</button>


        </div>
    )
}

export default CreateTrip   