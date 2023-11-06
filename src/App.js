import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Components/UserResgistration/SignUp";
 import  CutomerDashboard  from "./Components/Dashboard/CutomerDashboard";
import "./assets/css/app.css";
import "./assets/css/custom.css";

function App() {

    console.log(process.env.NODE_ENV);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/SignUp/Address" element={<SignUp />} />
          <Route exact path="/SignUp/Account-Preview" element={<SignUp />} />
          <Route exact path="/dashboard/Customer" element={<CutomerDashboard />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
