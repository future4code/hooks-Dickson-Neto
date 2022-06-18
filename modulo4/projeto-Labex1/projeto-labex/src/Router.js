import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import AdminPage from "./pages/AdminHomePage";
import CreateTrip from './pages/CreateTripPage'
import HomePage from './pages/homePage/HomePage'
import ListTrip from './pages/ListTripsPage'
import TripDetails from './pages/TripDetaisPage'
import ApplicationForm from "./pages/ApplicationFormPage";

const Router = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/listTrip" element={<ListTrip/>}/>
                <Route path="/creatTrip" element={<CreateTrip/>}/>
                <Route path="/adminPage" element={<AdminPage/>}/>
                <Route path="/tripDetails" element={<TripDetails/>}/>
                <Route path="/listTrip/:applicationForm" element={<ApplicationForm/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router;