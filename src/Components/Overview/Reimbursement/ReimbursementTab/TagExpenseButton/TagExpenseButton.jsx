import React from "react";
import styles from "./TagExpenseButton.module.css";
import sidebarsearchclose from "../../../../../assets/sidebarsearchclose.png";
import no_bills from "../../../../../assets/no_bills.png"


export default function TagExpenseButton({setopenTagexpense}) {
  return (
    <div>
      <div className={styles.TagExpensecontainerdiv}>
        <div className={styles.TagExpensecontainer}>
          <div className={styles.expensestobe}>Expenses to be Tagged to</div>
          <div className={styles.requestdate}>Reimbursement Request for 12-10-2025</div>
        </div>
        <div className={styles.imagecontainer} onClick={()=>setopenTagexpense(false)}>
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
                  <th>Expense Date</th>
                  <th>Reimbursable Status</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div>
          <div className={styles.preview}>
            <div className={styles.previewDiv}>Preview</div>
            <div className={styles.previewimg}>
              <img src={no_bills} />
              <p>No expense selected</p>
              <p>Open any expense and</p>
              <p>preview will be loaded with</p>
              <p>attachments automatically</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
