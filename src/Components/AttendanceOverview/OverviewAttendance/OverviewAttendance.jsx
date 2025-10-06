import React from "react";
import styles from "./OverviewAttendance.module.css";
import { Button } from '@mui/material'


const OverviewAttendance = () => {
  return (
    <div className={styles.Overview}>
      <div>
        <p className={styles.Overviewtext}> Overview</p>
      </div>
      <div>
        <div><Button variant="contained">+&nbsp;&nbsp;Request &#136;</Button></div>
      </div>
    </div>
  );
};

export default OverviewAttendance;
