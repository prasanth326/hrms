import React from 'react'
import styles from "./MyLeavePattern.module.css"
import chat from "../../../assets/chart.png"

export default function MyLeavePattern() {
    return (
        <div className={styles.leaveBCotainer}>
            <div className={styles.leaveBCotainer1}>My Leave Pattern</div>
            <div className={styles.diver}></div>
            <div className={styles.leaveBCotainer2}>
                <div className={styles.leaveBCotainerchat}>
                    <div className={styles.leaveBCotainerchatlive}>Leave Utilized : </div>
                    <div  className={styles.leaveBCotainerchatliveimg}><img src={chat}/> 25.5</div>
                </div>
                <div> &#136;</div>
            </div>
        </div>
    )
}
