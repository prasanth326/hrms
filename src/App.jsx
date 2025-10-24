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
import AssessmentHistory from "./Components/Performance/AssessmentHistory/AssessmentHistory";
import { Compensation } from "./Components/Compensation/Compensation";
import KeyResults from "./Components/Performance/keyResults/KeyResults";
import MyGoal from "./Components/Performance/MyGoal/MyGoal";
import GoalReview from "./Components/Performance/GoalReview/GoalReview";
import Hrdocsdocument from "./Components/Performance/Hrdocsdocument/Hrdocsdocument";
import FeedbackPage from "./Components/Performance/FeedbackPage/FeedbackPage";
import TabsTabs from "./Components/Performance/TabsTabs/TabsTabs";
import PerformanceHistory from "./Components/Performance/TabsTabs/PerformanceHistory";
import MsfHistory from "./Components/Performance/MSFHistory/MsfHistory";
import OverView from "./Components/Overview/OverView";
import Confirmation from "./Components/Flow/Confirmation/Confirmation";
import Reimbursement from "./Components/Overview/Reimbursement/Reimbursement";
import Benefits from "./Components/Benefits/Benefits";
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
          <Route path="/Performance/keyResults" element={<KeyResults />} />
          <Route path="/Performance/myGoal" element={<MyGoal />} />
          <Route path="/Performance/Review" element={<GoalReview />} />
          <Route path="/Performance/MSF" element={<Hrdocsdocument />} />
          <Route path="/Performance/Feedback" element={<FeedbackPage />} />
          <Route
            path="/Performance/Assessment"
            element={<PerformanceHistory />}
          />
          <Route path="/Performance/MsfHistory" element={<MsfHistory />} />
          <Route path="/Reimbursement/overview" element={<OverView />} />
          <Route path="/Flow/Confirmation" element={<Confirmation />} />
          <Route
            path="/Reimbursement/Reimbursement"
            element={<Reimbursement />}
          />
                    <Route path="/Benefits" element={<Benefits />} />

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
  );
}

export default App;
