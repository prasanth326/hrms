import React, { useEffect, useState } from "react";
import styles from "./SideNavbar.module.css";
import profile from "../../assets/profile.png";
import Employee_life_cycle from "../../assets/Employee_life_cycle.png";
import compensation from "../../assets/compensation.png";
import benifits1 from "../../assets/benifits1.png";
import attendance1 from "../../assets/attendance1.png";
import performance2 from "../../assets/performance2.png";
import chevronRight from "../../assets/chevronRight.png";
import travel from "../../assets/travel.png";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [showExtra, SetShowExtra] = useState("");
  const [showExtraBl, SetShowExtraBl] = useState(false);
  const [active, setActive] = useState("")

  const showExtraFn = (extra) => {
    SetShowExtra(extra)
    SetShowExtraBl((prev) => !prev)
  }
  const showExtrnSubfn = (sub) => {
    setActive(sub)
  }

  useEffect(() => {
    if (showExtra === "TimeAndAttendance") setActive('overview')
  }, [showExtra])
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.userDetails}>
          <div className={styles.logoCircle}></div>
          <div className={styles.details}>
            <div>
              <h2>Pranitha</h2>
            </div>
            <div>
              <p>Arin930</p>
            </div>
            <div>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineparent}>
        <div className={styles.line}>
        </div>
      </div>
      <ul className={styles.Menu}>
        <Link to="/profile">
          <img src={profile} alt="profile" />
          <span>Profile</span>
        </Link>
        <Link to="/flow">
          <img src={Employee_life_cycle} alt="Employee_life_cycle" />
          <span>Flow</span>
        </Link>
        <Link to="/Compensation">
          <img src={compensation} alt="compensation" />
          <span>Compensation</span>
        </Link>
        <Link to="/Benefits">
          <img src={benifits1} alt="benifits1" />
          <span>Benefits</span>
        </Link>
        <Link to="/Attendance/overview">
          <div className={styles.chevronRightDivContainer}>
            <div className={`${styles.chevronRightDiv} ${showExtra === "TimeAndAttendance" ? styles.avtiveTab : ""}`} onClick={() => showExtraFn("TimeAndAttendance")}>
              <div className={styles.chevronRightDivimg} >
                <img src={attendance1} alt="attendance1" />
                <span>Time & Attendance</span>
              </div>
              <span className={styles.chevronRight}><img src={chevronRight} alt="chevronRight" /></span>
            </div>
            {showExtra === "TimeAndAttendance" && showExtraBl ? <ul className={` ${showExtra === "TimeAndAttendance" ? styles.extraUiShow : styles.extraUi} `}>
              <Link to="/Attendance/overview" onClick={() => showExtrnSubfn("overview")} className={`${active === "overview" ? styles.activeSub : ""}`}>Overview</Link>
              <Link>Attendence</Link>
              <Link to="/Attendance/leave" onClick={() => showExtrnSubfn("leave")} className={`${active === "leave" ? styles.activeSub : ""}`}>Leave</Link>
            </ul> : null}
          </div>
        </Link>
        <Link to="/Performance">
          <img src={performance2} alt="performance2" />
          <span>Performance</span>
        </Link>
        <Link to="/Reimbursement">
          <img src={travel} alt="travel" />
          <span>Reimbursement</span>
        </Link>
        <Link to="/Interviews" className={`${styles.chevronRightDiv} ${showExtra === "Interviews" ? styles.avtiveTab : ""}`} onClick={() => showExtraFn("Interviews")}>
          <div className={styles.chevronRightDivimg}>
            <img src={travel} alt="travel" />
            <span>Interviews</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;
