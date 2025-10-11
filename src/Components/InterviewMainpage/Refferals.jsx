import React from "react";
import calendarcImg from "../../assets/calendarc-img.png";
import styles from "./Refferals.module.css";

export const Refferals = () => {
  return (
    <div className={styles.refferalsContainer}>
      <div className={styles.refferalsparent2}>
        <div className={styles.refferalsparent}>
          <div className={styles.titleimage}>
            <img src={calendarcImg} alt="calendarc-img" />
            <div>Refferals(1)</div>
          </div>
          <div>Refer candidate</div>
        </div>

        <div className={styles.titleimagep}>
          <p>CANDIDATE</p>
          <p>JOB STATUS</p>
          <p>RECUTER</p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};
