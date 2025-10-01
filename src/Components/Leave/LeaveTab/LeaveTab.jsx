import React, { useState } from 'react'
import styles from "./LeaveTab.module.css"

export default function LeaveTab({ setLeaveTab, leaveTab }) {

    return (
        <div className={styles.leaveConatiner}>
            <div
                className={
                    `${styles.leaveConatinerTab} ${leaveTab === "Leave Balance" ? styles.active : ""}`
                }
                onClick={() => setLeaveTab("Leave Balance")}
            >
                Leave Balance
            </div>
            <div
                className={
                    `${styles.leaveConatinerTab} ${leaveTab === "Holiday List" ? styles.active : ""}`
                }
                onClick={() => setLeaveTab("Holiday List")}
            >Holiday List</div>
            <div
                className={
                    `${styles.leaveConatinerTab} ${leaveTab === "History" ? styles.active : ""}`
                }
                onClick={() => setLeaveTab("History")}>History</div>
        </div>
    )
}
