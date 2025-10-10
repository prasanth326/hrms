import React from "react";
import styles from "./GoalPlan.module.css";
import { Button } from "@mui/material";
import benifits1 from "../../../assets/benifits1.png"

export default function GoalPlan() {
  return (
    <div className={styles.container}>
      <div className={styles.firstcontainer}>
        <div className={styles.firstcontainerimg}>
          <div className={styles.firstcontainerimg2}> <img src={benifits1} /></div>
          <div><p>Goal Plan</p></div>
        </div>
        <div><Button variant="contained">Update Goal Plan</Button></div>
      </div>
      <div className={styles.secondOverview}>
        <div className={styles.secondOverviewcard}>
          <div className={styles.zero}><span>0</span></div>
          <div className={styles.Objectives}>Objectives</div>
        </div>
      </div>
      <div className={styles.ThirdOverview}>
        <p>Goals/keys Result Areas Overview</p>
        <div className={styles.ThirdOverview2}>
          <div className={styles.imgbeniand}>            
            <div className={styles.imgbeni}>
              <div><img src={benifits1} /></div>
              <div  className={styles.imgbeni0}>0</div>
            </div>
            <div className={styles.imgbeni0s}>Completed</div>
          </div>
          <div className={styles.imgbeniand}>            
          <div className={styles.imgbeni}>
            <div><img src={benifits1} /></div>
            <div className={styles.imgbeni0}>0</div>
          </div>
            <div className={styles.imgbeni0s}>In Progress</div>
          </div>
          <div className={styles.imgbeniand}>            
          <div className={styles.imgbeni}>
            <div><img src={benifits1} /></div>
            <div className={styles.imgbeni0}>0</div>
          </div>
            <div className={styles.imgbeni0s}>On Hold</div>
          </div>
          <div className={styles.imgbeniand}>            
          <div className={styles.imgbeni}>
            <div><img src={benifits1} /></div>
            <div className={styles.imgbeni0}>0</div>
          </div>
            <div className={styles.imgbeni0s}>On Rsld</div>
          </div>
          <div className={styles.imgbeniand}>            
            <div className={styles.imgbeni}>
              <div><img src={benifits1} /></div>
              <div className={styles.imgbeni0}>0</div>
            </div>
            <div className={styles.imgbeni0s}>Delayed</div>
          </div>
          <div className={styles.imgbeniand}>            
            <div className={styles.imgbeni}>
              <div><img src={benifits1} /></div>
              <div className={styles.imgbeni0}>0</div>
            </div>
              <div  className={styles.imgbeni0s}>Not Satled</div>
          </div>
        </div>
      </div>
    </div>
  );
}
