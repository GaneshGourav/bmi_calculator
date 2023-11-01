import { Routes,Route } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Bmicalculation } from "../Pages/BmiCalculation"
import { BmiHistory } from "../Pages/BmiHistory"
import { Login } from "../Pages/login"
export const AllRoutes = () =>{
   

    return <>
    <Routes>

<Route path="/" element={<Home/>} />
<Route path="/bmi_Calculate" element={<Bmicalculation/>} />
<Route path="/bmi_History" element={<BmiHistory/>} />
<Route path="/login" element={<Login/>} />

    </Routes>
    </>
}


