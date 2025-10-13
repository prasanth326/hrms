import React from "react";
import styles from "./FlexiDeclaration.module.css"

export const  FlexiDeclaration= () => {
  const flexItems = [
    { title: "LTA(0 - 99,027)", PayAmount: 5000 },
    { title: "Telephone Reimbursement(0 - 36,000)", PayAmount: 5000 },
    { title: "Fuel Allowance(0 - 1,20,000)", PayAmount: 5000 },
    { title: "Books And Periodicals Allowance(0 - 1,20,000)", PayAmount: 5000 },
  ];
  return (
    <div className={styles.flexContainer}>
      <div className={styles.flexTitle}>
        <h2>Flexi Declaration for FY25-26 (₹)</h2>
        <p className={styles.Closed}>CLOSED</p>
      </div>
      {flexItems.map((flexitem, index) => (
        <div className={styles.flexi}>
          <div className={styles.flexitemtitle}>{flexitem.title}</div>
          <div className={styles.PayAmount}>{flexitem.PayAmount}</div>
        </div>
      ))}
    </div>
  );
};
