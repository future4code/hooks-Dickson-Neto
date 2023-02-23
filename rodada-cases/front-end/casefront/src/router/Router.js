import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import InitialPage from "../Pages/InitialPage/InitialPage";



const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<InitialPage/>}/>
            <Route path="/detalhes/:id" element={<DetailsPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router