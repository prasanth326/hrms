import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Signinpage from "./Components/SigninPage/Signinpage";
import Accesspage from "./Components/AccessPage/Accesspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Pagedetailed from "./Components/PageDetailed/Pagedetailed";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import ProfilePage from "./Components/Profile/ProfilePage";
import LeaveBalance from "./Components/Leave/LeaveBalance/LeaveBalance";
import AttendanceOverview from "./Components/AttendanceOverview/AttendanceOverview";
import Interviews from "./Components/Interviews/Interviews";
import Performance from "./Components/Performance/Performance";
import InterviewMainpage from "./Components/InterviewMainpage/InterviewMainpage";
import IndividualFeedBack from "./Components/IndividualFeedBack/IndividualFeedBack";
import { Compensation } from "./Components/Compensation/Compensation";
// import IndividualFeedBack from "./Components/IndividualFeedBack/IndividualFeedBack";

function LayoutApp() {
  const location = useLocation();
  const pathLocation =
    location.pathname === "/accesspage" || location.pathname === "/";
  const navlocation = location.pathname === "/";

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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Attendance/leave" element={<LeaveBalance />} />
          <Route path="/Attendance/Overview" element={<AttendanceOverview />} />
          <Route path="/Interviews" element={<InterviewMainpage />} />
          <Route path="/Performance" element={<Performance />} />
          <Route path="/Interviews/candidate" element={<Interviews />} />
          <Route
            path="/Interviews/individualFeedBack"
            element={<IndividualFeedBack />}
          />
         <Route path="/compensation" element={<Compensation />} />

        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutApp />
      {/* <IndividualFeedBack /> */}
    </Router>
  );
}

export default App;
