import React, { useEffect, useState } from "react";
import styles from "./Performance.module.css";
import OpenTask from "./OpenTask/OpenTask";
import GoalPlan from "./GoalPlan/GoalPlan";

const Performance = () => {
  return (
    <div className={styles.Performance}>
      <div className={styles.PerformanceOpen}><OpenTask/></div>
      <div className={styles.PerformanceOpenTask}>
        <div className={styles.Performancecard}>
          <div className={styles.GoalPlan}><GoalPlan/></div>
          <div className={styles.Feedback}>
            <div className={styles.attendanceMetrics}>Feedback</div>
            <div className={styles.leaveBalance}>Latest News</div>
          </div>
        </div>

        <div className={styles.SmartSuggestions}>
          <div className={styles.Suggestions}>Smart Suggestions</div>
          <div className={styles.Activity}>Activity</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
