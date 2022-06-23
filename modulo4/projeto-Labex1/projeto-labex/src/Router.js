import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import AdminPage from "./pages/adminPage/AdminHomePage";

import HomePage from './pages/homePage/HomePage'
import ListTrip from './pages/listTripPage/ListTripsPage'
import TripDetails from './pages/tripDetailsPage/TripDetaisPage'
import ApplicationForm from "./pages/applicationPage/ApplicationFormPage";
import TripComponents from './components/TripDetailsComponent';
import CreateTrip from "./pages/adminPage/CreateTrip";


const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/listTrip" element={<ListTrip/>}/>
                <Route path="/adminPage" element={<AdminPage/>}/>
                {/* <Route path="/tripDetails" element={<TripDetails/>}/> */}
                <Route path="/adminPage/tripDetails/:id" element={<TripDetails/>}/>
                <Route path="/listTrip/:applicationForm" element={<ApplicationForm/>}/>
                {/* <Route path="TripDetails" element={<TripDetails/>}/> */}
                <Route path="/adminPage/TripComponents" element={<TripComponents/>}/>
                <Route path="/adminPage/CreateTrip" element={<CreateTrip/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router;