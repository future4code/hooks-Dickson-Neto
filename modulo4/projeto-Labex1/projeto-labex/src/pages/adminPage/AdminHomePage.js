import React, { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { URL_BASE } from '../../constances/links'
import { backHomePage } from "../../coordination/Coordination";
import { CardTrips } from "../../components/ListTripComponents/StyledTrips";
import TripDetails from "../tripDetailsPage/TripDetaisPage";
import CreateTrip from "./CreateTrip";

const AdminPage = (props) => {
    const navigate = useNavigate()
    const [getDetais, setGetDetails] = useState([])
    const [detailsTrips, setDetailsTrip] = useState({})
    const params = useParams


    useEffect(() => {
        getTripList()
    }, [])
   
   
    const getTripList = () => {
        axios.get(`${URL_BASE}/trips`).then((res) => {
            setGetDetails(res.data.trips)
        }).catch((err) => {
            console.log(err.response)
        })
    }

   

   
    
    return (
        <div>


            <h3>Painel Administrativo</h3>
            <button onClick={() => backHomePage(navigate)}>Home</button>
            <button onClick={() => navigate("/adminPage/CreateTrip")}>Criar Viagens</button>
            <button onClick={() => navigate("/")} >Logout</button>


            {getDetais.map((trips) => {
                return <CardTrips onClick={()=>navigate(`/adminPage/tripDetails/${trips.id}`)} key={trips.id}>
                    {trips.name}     
                   
                </CardTrips>
            })}   
              
        </div>
    )
}

export default AdminPage