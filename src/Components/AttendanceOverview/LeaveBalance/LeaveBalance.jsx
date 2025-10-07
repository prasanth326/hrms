import React from 'react'
import styles from "./LeaveBalance.module.css"
import { styled } from '@mui/material';
import Clippathgroup from "../../../assets/Clippathgroup.png";
import unpaidLeave from "../../../assets/unpaidemoji.png"

const LeaveBalance = () => {
  const leaveBalance= [
{
  count: 1,
  leave: "Comp off"
},
{
  count: 6,
  leave: "Casual Leave"
},
{
  count: 5,
  leave: "Earned Leave"
},
{
  count: 5,
  leave: "Sick Leave"
},
{
  img: unpaidLeave,
  leave: "Loss of Pay"
}

  ]
  return (
   <div className={styles.LeaveBalance}>
     <div className={styles.card}>
      <h2>Leave Balances</h2>
      <button>View All</button>
     </div>
     <div className={styles.LeaveBalancecards}>
       {leaveBalance.map((leaves)=>(
        <div className={styles.balanceitems}>
          <div className={styles.count} >
            {leaves.count ? leaves.count : <img src={leaves.img}/>}
          </div>
          <div className={styles.leave} >
            {leaves.leave}
          </div>
            
        </div>
       ))}
     </div>
   </div>
  )
}

export default LeaveBalance
