import React from 'react'
import styles from "./MyLeavePattern.module.css"

export default function MyLeavePattern() {
    return (
        <div className={styles.leaveBCotainer}>
            <div className={styles.leaveBCotainer1}>My Leave Pattern</div>
            <div className={styles.diver}></div>
            <div className={styles.leaveBCotainer2}>
                <div>Leave Utilized</div>
                <div> &#136;</div>
            </div>
        </div>
    )
}
