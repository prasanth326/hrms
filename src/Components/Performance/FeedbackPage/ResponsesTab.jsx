import React from "react";
import styles from "./FeedbackPage.module.css";
import summaryempty from "../../../assets/summaryempty.png";

const ResponsesTab = () => {
  return (
    <div className={styles.contentSection}>
      <h3>Your Responses</h3>

      <div className={styles.emptyState}>
        <img src={summaryempty} alt="Responses Empty" />
        <p className={styles.title}>No responses yet</p>
        <p className={styles.subtitle}>
          Once others respond to your feedback requests, responses will appear here.
        </p>
      </div>
    </div>
  );
};

export default ResponsesTab;
