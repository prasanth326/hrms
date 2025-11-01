import { Button } from "@mui/material";
import React, { useState } from "react";
import rightmark from "../../../assets/rightmark.png";
import styles from "./MyTasks.module.css";
import mytaskimage from "../../../assets/mytaskimage.png";

export default function MyTasks() {
  const [active, setActive] = useState("");
  return (
    <div className={styles.MyTasks}>
      <div className={styles.Container}>
        <div className={styles.MyTasksicon}>
          <img src={rightmark} alt="rightmark" />
          <p>My Tasks</p>
        </div>
        <div className={styles.MyTasksbuttons}>
          <div
            className={`${styles.MyTasksbutton} ${
              active === "All" ? styles.activeclass : ""
            } `}
            onClick={() => setActive("All")}
          >
            All-0
          </div>
          <div
            className={`${styles.MyTasksbutton} ${
              active === "Overdue" ? styles.activeclass : ""
            }`}
            onClick={() => setActive("Overdue")}
          >
            Overdue-0
          </div>
          <div
            className={`${styles.MyTasksbutton} ${
              active === "Due" ? styles.activeclass : ""
            }`}
            onClick={() => setActive("Due")}
          >
            Due This week-0
          </div>
        </div>
        <div className={styles.showtxt}>
          <span>Show: </span>
          <select>
            <option>All</option>
          </select>
        </div>
      </div>
      <div className={styles.MyTaskImage}>
        <img src={mytaskimage} alt="mytaskimage" />
      </div>
      <div className={styles.MyTaskPassage}>
        <p>You don't have any New Tasks</p>
      </div>
    </div>
  );
}
