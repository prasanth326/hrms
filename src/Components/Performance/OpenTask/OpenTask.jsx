import React, { useState, useEffect } from "react";
import styles from "./OpenTask.module.css";
import listview from "../../../assets/listview.png";
import benifits1 from "../../../assets/benifits1.png"

const OpenTask = () => {
  const [buttons, setButtons] = useState("");

  const activeButton = (act) => {
    setButtons(act);
  };
  useEffect(() => {
    setButtons("All");
  }, []);
  return (
    <div className={styles.OpenTaskContainer}>
      <div className={styles.OpenTask}>
        <div  className={styles.OpenTaskdiv}><img src={benifits1}/> <div>Open Tasks</div></div>
        <div className={styles.buttonsdiv}>
          <div
            className={`${styles.buttons} ${
              buttons === "All" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("All")}
          >
            ALL-1
          </div>
          <div
            className={`${styles.buttons} ${
              buttons === "OVERDUE" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("OVERDUE")}
          >
            OVERDUE
          </div>
          <div
            className={`${styles.buttons} ${
              buttons === "TIMES" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("TIMES")}
          >
            DUE TIMES WEEK-10
          </div>
          <div
            className={`${styles.buttons} ${
              buttons === "filter" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("filter")}
          >
            <img src={listview} alt="listview" />
          </div>
        </div>
      </div>
      <div className={styles.label}>
              {buttons=== "All" ? ":Add Goals Key Result Areas to Goal Plan": buttons}
      </div>
    </div>
  );
};

export default OpenTask;
