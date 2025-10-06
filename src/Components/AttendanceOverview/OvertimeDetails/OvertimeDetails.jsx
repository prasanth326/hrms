import React from 'react';
import emptyOvertime from  '../../../assets/emptyOvertime.png';
import styles from "./OvertimeDetails.module.css"


const OvertimeDetails = () => {
  return (
    <div className={styles.container}>
    <div className={styles.Details}>Overtime Details</div>
    <div className={styles.OvertimeDetails}>
      <div className={styles.imagediv}>
        <img src={emptyOvertime} alt="image" />
         </div>
         <div>
          <p>No overtime recorded for the selected period</p>
         </div>
    </div>
    </div>
  )
}

export default OvertimeDetails