import React from 'react'
import styles from './LeaveHeaderTab.module.css'
import { Button } from '@mui/material'
import LeaveTab from '../LeaveTab/LeaveTab'

export default function LeaveHeaderTab({setLeaveTab, leaveTab}) {
  return (
    <div className={styles.leaveHeaderTab}>
        <div>Leave</div>
        <div className={styles.leaveHeaderTab2}><LeaveTab setLeaveTab={setLeaveTab} leaveTab={leaveTab}/></div>
        <div><Button variant="contained">+ Request &#136;</Button></div>
    </div>
  )
}
