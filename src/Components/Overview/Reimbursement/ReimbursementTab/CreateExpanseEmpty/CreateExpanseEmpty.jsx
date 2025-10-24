import React, { useState } from "react";
import expensesemptystate from "../../../../../assets/expensesemptystate.png";
import styles from "./CreateExpanseEmpty.module.css";
import { Button } from "@mui/material";

export default function CreateExpanseEmpty({addnewexpense,setaddnewexpense}) {
  return (
    <div className={styles.createexpanseempty}>
      <div className={styles.addnewexpense}>
        <Button variant="contained" onClick={()=>setaddnewexpense(true)}>+ ADD NEW EXPENSE</Button>
      </div>
      <div className={styles.addnewexpenseimgtext}>
        <div>
          <img src={expensesemptystate} />
        </div>
        <div className={styles.txt1}>
          Seems like you haven't added any Expenses yet
        </div>
        <div className={styles.txt2}>
          Click on+ ADD NEW EXPENSE button to Add Expense Now
        </div>
      </div>
    </div>
  );
}
