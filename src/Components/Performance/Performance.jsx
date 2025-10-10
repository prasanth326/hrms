import React, { useEffect, useState } from "react";
import styles from "./Performance.module.css";
import OpenTask from "./OpenTask/OpenTask";
import GoalPlan from "./GoalPlan/GoalPlan";
import Feedback from "./Feedback/Feedback";
import LatestNews from "./LatestNews/LatestNews";
import SmartSuggestions from "./SmartSuggestions/SmartSuggestions";

const Performance = () => {
  return (
    <div className={styles.Performance}>
      <div className={styles.PerformanceOpen}><OpenTask/></div>
      <div className={styles.PerformanceOpenTask}>
        <div className={styles.Performancecard}>
          <div className={styles.GoalPlan}><GoalPlan/></div>
          <div className={styles.Feedback}>
            <div className={styles.FeedbackCard}><Feedback/></div>
            <div className={styles.Latestnews}><LatestNews/> </div>
          </div>
        </div>

        <div className={styles.SmartSuggestions}>
          <div className={styles.Suggestions}><SmartSuggestions/></div>
          <div className={styles.Activity}>Activity</div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
