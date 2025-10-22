import React, { useState } from "react";
import reimbursementicon from "../../../../assets/reimbursementicon.png";
import { Button } from "@mui/material";
import styles from "./ReimbursementTab.module.css";
import expensesemptystate from "../../../../assets/expensesemptystate.png";
import TagExpenseButton from "./TagExpenseButton/TagExpenseButton";
export default function ReimbursementTab({ openTagexpense, setopenTagexpense }) {
  return (
    <>
      {!openTagexpense ? (
        <div className={styles.ReimbursementContainer}>
          <div className={styles.ReimbursementTab}>
            <div className={styles.leftsidediv}>
              <div className={styles.title}>Reimbursement Title*</div>
              <div className={styles.dateandtime}>
                Reimbursement Request for 12-10-2025
              </div>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.rightsidediv}>
              <div className={styles.rightside}>
                <div className={styles.imageicon}>
                  <img src={reimbursementicon} />
                </div>
                <div className={styles.amount}>
                  <div className={styles.totalamount}>Total Amount</div>
                  <div className={styles.zero}>0</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.expenses}>
            <div className={styles.zero}>Total 0 Expenses</div>
            <div className={styles.buttontag}>
              <Button
                variant="outlined"
                onClick={() => setopenTagexpense(true)}
              >
                TAG EXPENSE
              </Button>
              <Button variant="contained" className={styles.createexpense}>
                + CREATE EXPENSE
              </Button>
            </div>
          </div>
          <div className={styles.expensesemptystatediv}>
            <img src={expensesemptystate} alt="expensesemptystate" />
            <p className={styles.Noexpenses}>No expense requests to show yet</p>
            <p className={styles.expensescan}>
              Expenses can be tagged by creating new or using the existing ones
            </p>
          </div>
        </div>
      ) : (
        <TagExpenseButton setopenTagexpense={setopenTagexpense}/>
      )}
    </>
  );
}
