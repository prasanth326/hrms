import React from "react";
import styles from "./FeedbackPage.module.css";
import summaryempty from "../../../assets/summaryempty.png";

const ContributionsTab = () => {
  return (
    <div className={styles.contentSection}>
      <h3>Your Contributions</h3>

      <div className={styles.emptyState}>
        <img src={summaryempty} alt="Contributions Empty" />
        <p className={styles.title}>No contributions yet</p>
        <p className={styles.subtitle}>
          Feedback you give to others will appear in this section once you start contributing.
        </p>
      </div>
    </div>
  );
};

export default ContributionsTab;
