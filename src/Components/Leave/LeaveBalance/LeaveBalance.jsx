import React, { useState } from 'react'
import BalanceLeave from '../BalanceLeave/BalanceLeave'
import styles from "./LeaveBalance.module.css"
import MyLeavePattern from '../MyLeavePattern/MyLeavePattern'
import LeaveHeaderTab from '../LeaveHeaderTab/LeaveHeaderTab'
import { Select } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export default function LeaveBalance() {
  const [leaveTab, setLeaveTab] = useState("Leave Balance");
  const [leaveDetailsWindow, setLeaveDetailsWindow] = useState("");
  const [leaves, setLeaves] = React.useState('Comp');
  const [leavesTabClose, setleavesTabClose] = React.useState(false);

  const handleChange = (event) => {
    setLeaves(event.target.value);
  };

  const leaveWindowsx = () => {
    setleavesTabClose((prev) => !prev)
  }

  return (
    <div className={styles.leaveBCotainerMain}>
      <LeaveHeaderTab setLeaveTab={setLeaveTab} leaveTab={leaveTab} />
      <div className={styles.leaveBCotainerMaindiv}>
        <MyLeavePattern />
        {leaveTab === "Leave Balance" && <BalanceLeave setLeaveDetailsWindow={setLeaveDetailsWindow} setleavesTabClose={setleavesTabClose} />}
        {leaveTab === "Holiday List" && "Holiday List"}
        {leaveTab === "History" && "History"}
      </div>
      {leavesTabClose && leaveDetailsWindow && <div className={styles.leaveWindowsOverLay} onClick={(e) => {setleavesTabClose(false)}}>
        <div className={styles.leaveWindows} onClick={(e) => {e.stopPropagation()}}>
          <div className={styles.leaveWindowsdetails}>
            <div>Leave Details</div>
            <div className={styles.leaveWindowsx} onClick={() => leaveWindowsx()}>x</div>
          </div>
          <div className={styles.leaveWindowsdiver}></div>
          <div className={styles.leaveWindowsdiverBox}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={leaves}
                  onChange={handleChange}
                >
                  <MenuItem value={"Comp"}>Comp off</MenuItem>
                  <MenuItem value={"Casual"}>Casual Leaves</MenuItem>
                  <MenuItem value={"Earned"}>Earned Leaves</MenuItem>
                  <MenuItem value={"Sick"}>Sick Leaves</MenuItem>
                  <MenuItem value={"Loss"}>Loss of Pay</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>{leaves}</div>
        </div>
      </div>}
    </div>
  )
}
