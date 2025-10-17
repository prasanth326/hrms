import React from "react";
import stopicon from "../../../assets/stopicon.png";
import styles from "./ReimbursementSummary.module.css";

export default function ReimbursementSummary() {
  return (
    <div className={styles.summary}>
      <div className={styles.summaryTitle}>
        <img src={stopicon} alt="stopicon" />
        <div>Reimbursement Summary</div>
      </div>
      <div className={styles.coins}>
        <div className={styles.coinsdiv}>
          <div className={styles.bigcoins}>
            <i class="fa fa-play-circle" style={{ color: "green" }}></i>
            <p>00</p>
          </div>
          <p>|</p>
          <p>INR 0</p>
        </div>
      </div>
      <div className={styles.totalexpenses}>
        <p>Total Expenses</p>
      </div>
    </div>
  );
}
