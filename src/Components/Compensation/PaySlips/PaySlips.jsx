import styles from './PaySlips.module.css'
import { Button } from '@mui/material'
import PaySlipTable from './PaySlipTable'

export const PaySlips = ({showValues}) => {
  return (
    <div className={styles.paySlipsContainer}>
      <div className={styles.paySlipsYear}>
        <div className={styles.paySlipsYearText}>Pay Slips For FY2025-26</div>
        <div className={styles.paySlipsYearContainer}>
          <p>Curreny: INR</p>
          <Button variant='outlined'>Yearly Pay Slips</Button>
        </div>
      </div>
      <div>
        <PaySlipTable showValues={showValues}/>
      </div>
    </div>
  )
}
