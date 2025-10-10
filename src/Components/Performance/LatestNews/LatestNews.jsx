import React from "react";
import styles from "./LatestNews.module.css";
import benifits1 from "../../../assets/benifits1.png";

const LatestNews = () => {
  return (
    <div className={styles.LatestNewsContainer}>
      <div className={styles.LatestNews}>
        <div>
          <img src={benifits1} />
        </div>
        <div className={styles.LatestNewsTitle}>Latest Notes</div>
      </div>
      <div className={styles.Activities} >
        <div className={styles.NoActivities}>No Activities found</div>
        <div className={styles.NoNotes}>No Notes/ Conversations available</div>
      </div>
      <div className={styles.buttondiv} >
        <button className={styles.Addnew}> Add new</button>
        <button className={styles.Viewall}> View All</button>
      </div>
    </div>
  );
};

export default LatestNews;
