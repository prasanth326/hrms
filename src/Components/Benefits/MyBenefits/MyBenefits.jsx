import React from "react";
import styles from "../BenefitsTab/BenefitsTab.module.css";

const MyBenefits = () => {
  return (
    <div className={styles.tabContent}>
      <h3 className={styles.sectionTitle}>My Benefits for FY25-26</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Benefit Type</th>
            <th>Annual Limit</th>
            <th>Utilized</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className={styles.emptyCell}>
              <p>There are no benefits assigned to you for this financial year.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyBenefits;
