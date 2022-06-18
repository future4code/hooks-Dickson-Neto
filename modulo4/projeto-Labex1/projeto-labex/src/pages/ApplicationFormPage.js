import React from "react";
import {useNavigate , useParams} from 'react-router-dom'
import { goToListTrip } from "../coordination/Coordination";


const ApplicationForm = () =>{
    const navigate = useNavigate()
    const params = useParams()
    return(
        <div>
         Pagina Cadastro de viagens
         <button onClick={()=> navigate(-1)}>Voltar para ListTrip</button>
         <button>Enviar Formulario</button>
        </div>
    )
}

export default ApplicationForm;