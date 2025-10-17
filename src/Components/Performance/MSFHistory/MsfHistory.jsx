import React from "react";
import styles from "./MsfHistory.module.css";

export default function MsfHistory() {
  return (
    <div className={styles.MsfHistoryContainer}>
    <div className={styles.MsfHistory}>
      <div className={styles.divider}></div>
      <div className={styles.MsfHistoryname}>History of MSF</div>
      <div className={styles.divider}></div>
      <div className={styles.headersContainer}>
      <div className={styles.headers}>
        <div>MsProcess Name</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Report Attachments</div>
      </div>
      <div className={styles.MSFC}>
      <div className={styles.MSF}>No MSF data available</div>
      </div>
      </div>
    </div>
    </div>
  );
}
