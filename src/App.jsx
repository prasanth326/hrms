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
import ProfilePage from "./Components/Profile/ProfilePage"
function LayoutApp() {
  const location = useLocation();
  const pathLocation = location.pathname === '/accesspage' || location.pathname === '/'
  const navlocation = location.pathname=== '/' 

  return (
    <>
      {!navlocation && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accesspage" element={<Accesspage />} />
      </Routes>
      <div className="content">
      {!pathLocation && <SideNavbar />}
      <Routes>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutApp />
    </Router>
  )
}

export default App;
