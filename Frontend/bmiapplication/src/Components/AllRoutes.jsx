import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Bmicalculation } from "../Pages/BmiCalculation";
import { BmiHistory } from "../Pages/BmiHistory";
import { Login } from "../Pages/login";
import { Signup } from "../Pages/Signup";
import { PrivateRoutes } from "./PrivatePage";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/bmi_Calculate"
          element={
            <PrivateRoutes>
              <Bmicalculation />
            </PrivateRoutes>
          }
        />
        <Route path="/bmi_History" element={<BmiHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
