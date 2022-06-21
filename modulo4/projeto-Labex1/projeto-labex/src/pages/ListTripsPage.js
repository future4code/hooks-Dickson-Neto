import React from "react";
import {useNavigate , useParams} from 'react-router-dom'
import { goToApplicationForm, backHomePage } from "../coordination/Coordination";

const ListTrips = () =>{
    const navigate = useNavigate()
    const params = useParams
    
    return (
        <div>
            Pagina Lista Viagens
            <button onClick={()=> backHomePage(navigate)}>Home</button>
            <button onClick={()=> goToApplicationForm(navigate)}>Inscrever-se</button>
        </div>
    )
}

export default ListTrips