import stopicon from "../../../assets/stopicon.png";
import clock from "../../../assets/clock.png";
import clock1 from "../../../assets/greenclock.png";

import styles from "./ReimbursementSummary.module.css";

export default function ReimbursementSummary() {
  const summary = [
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Submission",
    },
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Approval",
    },
    {
      image: clock,
      num: "00",
      inr: "I",
      msg: "Pending for Processing",
    },
    {
      image: clock,
      num: "00",
      inr: "INR 0",
      msg: "Pending for Clarification/closure",
    },
  ];
  const Expenses = [
    {
      image: clock1,
      num: "00",
      inr: "I",
      msg: "Pending for Approval",
    },
    {
      image: clock1,
      num: "00",
      inr: "I",
      msg: "Pending for Processing",
    },

    {
      image: clock1,
      num: "00",
      inr: "INR 0",
      msg: "Pending for Clarification/closure",
    },
  ];
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
      <div className={styles.pendingItemsparent}>
        {summary.map((items, i) => (
          <div className={styles.pendingItems}>
            <div className={styles.pendingItemsClock}>
              <div className={styles.pendingItemsClockImag}>
                <img src={items.image} />
              </div>
              <div className={styles.pendingItemsClockCount}>{items.num}</div>

              <div className={styles.pendingItemsDivider}></div>
              <div className={styles.pendingItemsRupee}>{items.inr}.</div>
            </div>
            <div className={styles.pendingItemsClockText}>
              <div className={styles.pendingItemsClockTextmsg}>{items.msg}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.Expenses}>Expenses with Exceptions</div>
      <div className={styles.pendingItemsparent}>
        {Expenses.map((items, i) => (
          <div className={styles.pendingItems}>
            <div className={styles.pendingItemsClock1}>
              <div className={styles.pendingItemsClockImag}>
                <img src={items.image} />
              </div>
              <div className={styles.pendingItemsClockCount1}>{items.num}</div>
              <div className={styles.pendingItemsDivider}></div>
              <div className={styles.pendingItemsRupee1}>{items.inr}.</div>
            </div>
            <div className={styles.pendingItemsClockText}>
              <div className={styles.pendingItemsClockTextmsg}>{items.msg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
