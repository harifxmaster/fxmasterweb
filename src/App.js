import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./Components/UserResgistration/SignUp";
import AccountPreview from "./Components/UserResgistration/AccountPreview";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
