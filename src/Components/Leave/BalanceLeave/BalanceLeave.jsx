import React from 'react'
import styles from "./BalanceLeave.module.css"

export default function BalanceLeave() {
  return (
    <div className={styles.leaveCotainer}>
      <div className={styles.leaveCotaineraBal}>Balance as of Today</div>
      <div className={styles.leaveBalanceCotainer}>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
           <div className={styles.colorr}></div>
            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>1</span>
              <span className={styles.leaveAddComp}>Comp off</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}>+</span>
              <div className={styles.leaveAddDot}><p>...</p></div>
            </div>
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}></div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
                       <div className={styles.colorr2}></div>

            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>6</span>
              <span className={styles.leaveAddComp}>Casual Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}>+</span>
              <div className={styles.leaveAddDot}><p>...</p></div>
            </div>
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>6</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr3}></div>
            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>5</span>
              <span className={styles.leaveAddComp}>Earned Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}>+</span>
              <div className={styles.leaveAddDot}><p>...</p></div>
            </div>
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>7</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
                       <div className={styles.colorr4}></div>

            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>5</span>
              <span className={styles.leaveAddComp}>Sick Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}>+</span>
              <div className={styles.leaveAddDot}><p>...</p></div>
            </div>
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>6</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
                       <div className={styles.colorr5}></div>

            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>Icons</span>
              <span className={styles.leaveAddComp}>Loss of Pay</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}>+</span>
              <div className={styles.leaveAddDot}><p>...</p></div>
            </div>
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAddReady}>
            <div className={styles.already}>
              <div>0</div>
              <div>Already Taken</div>
            </div>
            <div className={styles.already}>
              <div>0</div>
              <div>Applied</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
