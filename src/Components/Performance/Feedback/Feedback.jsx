import React from "react";
import styles from "./Feedback.module.css";
import benifits1 from '../../../assets/benifits1.png'


const Feedback = () => {
  return (
    <div>
      <div className={styles.Feedbackcard}>
        <div className={styles.Feedback}>
          <div>
            <img src={benifits1}/>
          </div>
          <div className={styles.FeedbackTitle}>Feedback</div>
        </div>
        <div className={styles.Feedbackbuttons}>
          <div className={styles.buttondivs}>1M</div>
          <div className={styles.buttondivs}>3M</div>
          <div className={styles.buttondivs}> 6M</div>
          <div className={styles.buttondivs}>1Y</div>
        </div>
        <div className={styles.Feedbackvalues}>
            <div className={styles.leftside} >
            <div className={styles.values}>0</div>
            <div className={styles.label}>Total Given</div>
            </div>
            <div className={styles.rightside}>
            <div className={styles.values}>0</div>
            <div className={styles.label}>Total Received</div>
            </div>
        </div>
        <div className={styles.bottomdiv} >Launchpad</div>
      </div>
    </div>
  );
};

export default Feedback;
