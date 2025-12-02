import React, { useState } from "react";
import styles from './PaySlips.module.css'
import { Button } from '@mui/material'
import PaySlipTable from './PaySlipTable'
import YearlyPaySlipModal from './YearlyPaySlipModal'

export const PaySlips = ({ showValues }) => {
  const [showYearly, setShowYearly] = useState(false);

  return (
    <div className={styles.paySlipsContainer}>
      <div className={styles.paySlipsYear}>
        <div className={styles.paySlipsYearText}>Pay Slips For FY2025-26</div>
        <div className={styles.paySlipsYearContainer}>
          <p>Currency: INR</p>
          <Button variant='outlined' onClick={() => setShowYearly(true)}>Yearly Pay Slips</Button>
        </div>
      </div>
      <div>
        <PaySlipTable showValues={showValues}/>
      </div>

      <YearlyPaySlipModal open={showYearly} onClose={() => setShowYearly(false)} />
    </div>
  )
}
