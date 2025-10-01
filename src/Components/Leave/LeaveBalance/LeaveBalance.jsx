import React, { useState } from 'react'
import BalanceLeave from '../BalanceLeave/BalanceLeave'
import styles from "./LeaveBalance.module.css"
import MyLeavePattern from '../MyLeavePattern/MyLeavePattern'
import LeaveHeaderTab from '../LeaveHeaderTab/LeaveHeaderTab'

export default function LeaveBalance() {
  const[leaveTab, setLeaveTab]=useState ("Leave Balance");

  return (
    <div className={styles.leaveBCotainerMain}>
      <LeaveHeaderTab setLeaveTab={setLeaveTab} leaveTab={leaveTab}/>
      <div className={styles.leaveBCotainerMaindiv}>
        <MyLeavePattern />
        {leaveTab === "Leave Balance" && <BalanceLeave />}
        {leaveTab === "Holiday List" && "Holiday List"}
        {leaveTab === "History" && "History"}
      </div>
    </div>
  )
}
