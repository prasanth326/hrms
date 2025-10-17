import stopicon from "../../../assets/stopicon.png";
import clock from "../../../assets/clock.png";

import styles from "./ReimbursementSummary.module.css";

export default function ReimbursementSummary() {
  const summary = [
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Submission"
    },
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Approval"
    },
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Processing"
    },
    {
      image: clock,
      num: "00",
      inr: "INR",
      msg: "Pending for Clarification/closure"
    },
  ]
  return (
    <div className={styles.summaryparent}>
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
    </div>
  );
}
