import React from "react";
import requests from "../../../assets/requests.png";
import styles from './AdvanceTab.module.css'

export default function AdvanceTab() {
  return (
    <div>
      <div className={styles.advanceTab}>
        <div><img src={requests}/></div>
        <div className={styles.advanceTabtext1}>No advance requests available yet</div>
        <div className={styles.advanceTabtext2}>Advances can be tagged while raising a reimbursement</div>
      </div>
    </div>
  );
}
