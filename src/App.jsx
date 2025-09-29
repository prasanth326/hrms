import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signinpage from "./Components/SigninPage/Signinpage";
import Accesspage from "./Components/AccessPage/Accesspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagedetailed from "./Components/PageDetailed/Pagedetailed";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

function App() {
  const params= useLocation();
  console.log("params",params);
  
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/accesspage" element={<Accesspage />} />
          {/* <Route path="/accesspage/:title/:id" element={<Pagedetailed />} /> */}
        </Routes>
        <SideNavbar />
      </Router>
    </>
  );
}

export default App;
