import React from "react";

import calendarcImg from "../../assets/calendarc-img.png";
import { useNavigate } from "react-router-dom";

import styles from "./Priorities.module.css";

export default function Priorities() {
  const navigate = useNavigate()

  const navigateto=()=>{
    navigate("/Interviews/individualFeedBack")
  }
  return (
    <div className={styles.prioritiesparent}>
      <div className={styles.prioritiesContainer}></div>
      <div className={styles.prioritiesContainercolor}></div>
      <div className={styles.prioritiesContainerp}>
        <div className={styles.priorities}>
          <div className={styles.prioritiesupcoming}>
            <div className={styles.prioritiesim}>
              <img src={calendarcImg} alt="calendarc-img" />
              <p>My Priorities</p>
            </div>
            <div className={styles.upcoming}>Upcoming tasks &gt;</div>
          </div>
          <div className={styles.pendingContainer}>
            <div className={styles.pending}>PENDING (8)</div>
            <div className={styles.pendingDivder}></div>
          </div>
          <div className={styles.pendingContainer1}>
            <div className={styles.pendingContainerdiv}>
              <img src={calendarcImg} alt="calendarc-img" />
              <button onClick={navigateto}>Submit Feedback</button>
            </div>
            <div className={styles.pendingDivder}></div>

            <div className={styles.pendingContainerdiv}>
              <img src={calendarcImg} alt="calendarc-img" />
              <button onClick={navigateto}>Submit Feedback</button>
            </div>
            <div className={styles.pendingDivder}></div>

            <div className={styles.pendingContainerdiv}>
              <img src={calendarcImg} alt="calendarc-img" />
              <button onClick={navigateto}>Submit Feedback</button>
            </div>
            <div className={styles.pendingDivder}></div>

            <div className={styles.pendingContainerdiv}>
              <img src={calendarcImg} alt="calendarc-img" />
              <button onClick={navigateto}>Submit Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
