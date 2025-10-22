import { Button } from "@mui/material";
import React from "react";
import styles from "./Overview.module.css";
import ReimbursementSummary from "./ReimbursementSummary/ReimbursementSummary";
import MyTasks from "./MyTasks/MyTasks";
import greenclock from "../../assets/greenclock.png";

export default function OverView() {
  return (
    <div className={styles.OverallContainer}>
      <div className={styles.OverviewContainerdiv}>
        <div className={styles.OverviewContainer}>
          <div className={styles.OverviewTitle}>Overview</div>
          <div className={styles.summary}>SUMMARY</div>
        </div>
        <div className={styles.OverviewContainerbuttons}>
          <Button variant="outlined">CUSTOMIZE</Button>
          <Button variant="outlined">CREATE</Button>
        </div>
      </div>
      <div className={styles.Reimbursement}>
        <div className={styles.Reimbursementdiv}>
          <div className={styles.ReimbursementTab}>
            <ReimbursementSummary />
          </div>
          <div className={styles.MyTasks}>
            <MyTasks />
          </div>
        </div>
        <div>
          <div className={styles.Notifications}>
            <div className={styles.Notificationsdiv}>
              <div className={styles.imageandtitle}>
                <img src={greenclock} />
                <p>Notifications</p>
              </div>
              <div className={styles.days}>Last 30 days</div>
            </div>
            <div className={styles.viewall}>
              <Button variant="outlined">VIEW ALL</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
