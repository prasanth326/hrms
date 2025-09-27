import React from "react";
import styles from "./SideNavbar.module.css"

const SideNavbar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}></div>
      <ul className={styles.Menu}>
        <li>
          <span>Profile</span>
        </li>
        <li>
          <span>Flow</span>
        </li>
        <li>
          <span>Compensation</span>
        </li>
        <li>
          <span>Benefits</span>
        </li>
        <li>
          <span>Time & Attendance</span>
        </li>
        <li>
          <span>Performance</span>
        </li>
        <li>
          <span>Reimbursement</span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
