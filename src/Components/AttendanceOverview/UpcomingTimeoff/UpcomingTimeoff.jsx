import React from "react";
import styles from "./UpcomingTimeoff.module.css";

const UpcomingTimeoff = () => {
  return (
    <div className={styles.UpcomingTimeoffContainer}>
      <div className={styles.UpcomingTimeoff}>Upcoming Time off</div>
      <div className={styles.Upcoming}>
        <div className={styles.dateSide}>
          <div className={styles.day}>02 Oct</div>
          <div className={styles.weekday}>Thu</div>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>Mahatma Gandhi Jayanthi</div>
          <div className={styles.type}>Holiday</div>
        </div>
      </div>
      <div className={styles.Line}>
        <div className={styles.Divider}></div>
      </div>
      <div className={styles.Upcoming}>
        <div className={styles.dateSide}>
          <div className={styles.day}>21 Oct</div>
          <div className={styles.weekday}>Tue</div>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>Diwali</div>
          <div className={styles.type}>Holiday</div>
        </div>
      </div>
      <div className={styles.Line}>
        <div className={styles.Divider}></div>
      </div>
      <div className={styles.Upcoming}>
        <div className={styles.dateSide}>
          <div className={styles.day}>25 Dec</div>
          <div className={styles.weekday}>Thu</div>
        </div>
        <div className={styles.details}>
          <div className={styles.name}>Christmas</div>
          <div className={styles.type}>Holiday</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTimeoff;
