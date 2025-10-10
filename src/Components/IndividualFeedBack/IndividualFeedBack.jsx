import React, { useState } from 'react'
import styles from "./IndividualFeedBack.module.css"
import IndividualFeedBackTab from './IndividualFeedBackTab'
import FocusAccess from './FocusAccess';

export default function IndividualFeedBack() {
    const [hire, setHire] = useState("");

    const hireFn = (data) => {
        setHire(data)
    }
    return (
        <div className={styles.individualFeedBack}>
            <div className={styles.individualFeedBackLeft}>
                <div className={styles.userDetails}>
                    <p>Pranitha</p>
                </div>
                <div className={styles.tabAndResume}>
                    <div className={styles.tabs2}>
                        <div className={styles.tabsName}>Resume</div>
                        <div className={styles.tabspdf}>Pranitha.pdf</div>
                    </div>
                    <div className={styles.resume}></div>
                </div>
            </div>
            <div className={styles.individualFeedBackRight}>
                <IndividualFeedBackTab />
                <div className={styles.scorecardtextdiv}>
                    <div className={styles.scorecardtext}>
                        A scorecard has been created to help you structure your interview. Use this to submit your feedback after
                        evalution. Feedback is used internally and will not be shared with the condidate.
                    </div>
                    <div className={styles.Overall}>Your Overall Recommendation</div>
                    <div className={styles.btns}>
                        <div className={`${styles.btns1Green} ${hire === "Strong Hire" ? styles.btnactiveGreen : ""}`} onClick={() => hireFn("Strong Hire")}>Strong Hire</div>
                        <div className={`${styles.btns1Green} ${hire === "Hire" ? styles.btnactiveGreen : ""}`} onClick={() => hireFn("Hire")}>Hire</div>
                        <div className={`${styles.btns1Red} ${hire === "No Hire" ? styles.btnactiveRed : ""}`} onClick={() => hireFn("No Hire")}>No Hire</div>
                        <div className={`${styles.btns1Red} ${hire === "Strong No Hire" ? styles.btnactiveRed : ""}`} onClick={() => hireFn("Strong No Hire")}>Strong No Hire</div>
                    </div>
                    <div><FocusAccess /></div>
                </div>
            </div>
        </div>
    )
}
