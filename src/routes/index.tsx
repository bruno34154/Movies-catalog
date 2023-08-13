import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";
import DetailMovie from "../pages/detailMovie";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}/> 
               <Route path="detailsMovie/:id" element={<DetailMovie />}/> 
            </Routes>
        </BrowserRouter>
    );
}