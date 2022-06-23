import React from "react";
import { CardTrips } from "../../components/ListTripComponents/StyledTrips";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../../constances/links";
import { navigate, useNavigate, useParams } from "react-router-dom";
import TripComponents from '../../components/TripDetailsComponent'



const TripDetails = (props) =>{
    // const token = localStorage.getItem("token")
    const [detailsTrips , setDetailsTrip] = useState({})
    const [approved , setApproved] = useState([])
    const [wait , setWait] = useState({})
    // const [testeCondicional , setTests] = useState(null)
    // const navigate = useNavigate()
    const params = useParams()

    useEffect(()=>{
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }

        }
        axios.get(`${URL_BASE}/trip/${params.id}`, headers).then((res) => {
            setDetailsTrip(res.data.trip)
            setApproved(res.data.trip.approved)
            console.log(res.data.trip.candidates)

           
            

        }).catch((err) => {
            console.log(err)
        })
    } , [])
    
    
   
     
    return (
        
        <div>
            <div>
                 {detailsTrips.name}
            </div> 
            <div>
                { detailsTrips.date}    
            </div>

            <div>
              {detailsTrips.description}
            </div>

            <div>
                {wait.candidates}
                 { detailsTrips.planet}
            </div>
           
            
        </div>
       
    )
}

export default TripDetails