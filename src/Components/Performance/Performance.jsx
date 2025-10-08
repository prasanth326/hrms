import React, { useEffect, useState } from "react";
import styles from "./Performance.module.css";
import listview from "../../assets/listview.png";

const Performance = () => {
  const [buttons, setButtons] = useState("ALL");
  const [active, setActive]= useState(false)
  const activeButton = (act) => {
    setButtons(act);
    setActive((prev)=>!prev)
  };
  useEffect(()=>{
    if(buttons==="ALL") setActive(true)
  },[buttons])

  return (
    <div className={styles.Performance}>
      <div className={styles.PerformanceOpen}>
        <div> Open Tasks</div>
        <div className={styles.buttonsdiv}>
          <div className={`${styles.buttons} ${active && buttons === "All" ? styles.activebtn: ""}`} onClick={() => activeButton("All")}>
            ALL-1
          </div>
          <div
            className={`${styles.buttons} ${active && buttons === "OVERDUE" ? styles.activebtn: ""}`}
            onClick={() => activeButton("OVERDUE")}
          >
            OVERDUE
          </div>
          <div className={`${styles.buttons} ${active && buttons === "TIMES" ? styles.activebtn: ""}`} onClick={() => activeButton("TIMES")}>
            DUE TIMES WEEK-10
          </div>
          <div
            className={`${styles.buttons} ${active && buttons === "filter" ? styles.activebtn: ""}`}
            onClick={() => activeButton("filter")}
          >
            <img src={listview} alt="listview" />
          </div>
        </div>
      </div>

      <div className={styles.PerformanceOpenTask}>
        <div className={styles.Performancecard}>
          <div className={styles.GoalPlan}>Goal Plan</div>
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
