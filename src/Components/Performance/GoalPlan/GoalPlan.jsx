import React from "react";
import styles from "./GoalPlan.module.css";

export default function GoalPlan() {
  return (
    <div className={styles.container}>
      <div className={styles.firstcontainer}>
        <div>GoalPlan</div>
        <div className={styles.updategoal}>Update Goal Plan</div>
      </div>
      <div className={styles.secondOverview}>
        <div className={styles.secondOverviewcard}>
        <div className={styles.zero}>0</div>
        <div className={styles.Objectives}>Objectives</div>
        </div>
      </div>
      <div className={styles.ThirdOverview}>
        <p>Goals/keys Result Areas Overview</p>
      </div>
    </div>
  );
}
