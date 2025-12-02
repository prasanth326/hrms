import React from "react";
import styles from "../BenefitsTab/BenefitsTab.module.css";

const BenefitSlips = () => {
  return (
    <div className={styles.tabContent}>
      <h3 className={styles.sectionTitle}>Benefits Slips for FY25-26</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Slip Number</th>
            <th>Generated On</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className={styles.emptyCell}>
              <p>No benefit slips have been generated for the selected year.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BenefitSlips;
