import React from "react";
import styles from "./TagExpenseButton.module.css";
import sidebarsearchclose from "../../../../../assets/sidebarsearchclose.png";

export default function TagExpenseButton() {
  return (
    <div>
      <div className={styles.TagExpensecontainerdiv}>
        <div className={styles.TagExpensecontainer}>
          <div>Expenses to be Tagged to</div>
          <div>Reimbursement Request for 12-10-2025</div>
        </div>
        <div className={styles.imagecontainer}>
          <img src={sidebarsearchclose} />
        </div>
      </div>
      <div className={styles.TagExpensetablediv}>
        <div className={styles.TagExpensetable}>
            <div>Total 0 Expenses</div>
            <div className={styles.expensetable}>
              <table>
                <thead>
                  <tr>
                    <th>Expense Type</th>
                    <th>Merchant</th>
                    <th>Expense Type</th>
                    <th>Expense Type</th>
                    <th>Expense Type</th>
                    <th>Expense Type</th>
                  </tr>
                </thead>
              </table>
          </div>
        </div>
        <div>box</div>
      </div>
    </div>
  );
}
