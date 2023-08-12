import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../pages/home";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />}/> 
            </Routes>
        </BrowserRouter>
    );
}