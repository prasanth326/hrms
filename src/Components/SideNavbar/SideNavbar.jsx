import React from "react";
import styles from "./SideNavbar.module.css"
import profile from "../../assets/profile.png";
import Employee_life_cycle from "../../assets/Employee_life_cycle.png";
import compensation from "../../assets/compensation.png";
import benifits1 from "../../assets/benifits1.png";
import attendance1 from "../../assets/attendance1.png";
import performance2 from "../../assets/performance2.png";
import travel from "../../assets/travel.png";


const SideNavbar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>LOGO</div>
      <ul className={styles.Menu}>
        <li>
          <img src={profile} alt="profile" />
          <span>Profile</span>
        </li>
        <li>
          <img src={Employee_life_cycle} alt="Employee_life_cycle" />
          <span>Flow</span>
        </li>
        <li>
          <img src={compensation} alt="compensation" />
          <span>Compensation</span>
        </li>
        <li>
          <img src={benifits1} alt="benifits1" />
          <span>Benefits</span>
        </li>
        <li>
          <img src={attendance1} alt="attendance1" />
          <span>Time & Attendance</span>
        </li>
        <li>
          <img src={performance2} alt="performance2" />
          <span>Performance</span>
        </li>
        <li>
          <img src={travel} alt="travel" />
          <span>Reimbursement</span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
