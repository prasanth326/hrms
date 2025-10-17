import { Button } from "@mui/material";
import React from "react";
import styles from "./Overview.module.css";
import ReimbursementSummary from "./ReimbursementSummary/ReimbursementSummary";

export default function OverView() {
  return (
    <div>
      <div className={styles.OverviewContainerdiv}>
        <div className={styles.OverviewContainer}>
          <div>OverView</div>
          <div className={styles.OverviewContainerbuttons}>
            <Button variant="outlined">CUSTOMIZE</Button>
            <Button variant="outlined">CREATE</Button>
          </div>
        </div>
        <div>SUMMARY</div>
      </div>
      <div className={styles.Reimbursement}>
        <div className={styles.Reimbursementdiv}>
          <div className={styles.ReimbursementTab}><ReimbursementSummary/></div>
          <div className={styles.MyTasks}>My Tasks</div>
        </div>
        <div>
          <div className={styles.Notifications}>Notifications</div>
        </div>
      </div>
    </div>
  );
}
