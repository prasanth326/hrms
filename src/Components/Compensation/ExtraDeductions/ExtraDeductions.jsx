import { Button } from "@mui/material";
import React, {useState} from "react";
import Clipath from "../../../assets/Clipath.png";
import styles from "./ExtraDeductions.module.css";

export const ExtraDeductions = () => {
    const [openSelectbtn, setOpenSelectbtn] = useState(false);
  
  return (
    <div lassName={styles.Deductionstab}>
      <div className={styles.Deductions}>
        <h2>Advance for FY25-26</h2>
        <div>
          <Button variant="outlined" onClick={()=>setOpenSelectbtn(!openSelectbtn)}>Raise Request</Button>
          {openSelectbtn && (
            <div className={styles.btnselect}>
              <p>Extra Deductions</p>
              <p>Loans</p>
            </div>
          )}
        </div>      
        </div>
      <div className={styles.Deductionstablebox}>
        <div className={styles.Deductionstable}>
          <div>Name</div>
          <div>Category</div>
          <div>Amount</div>
          <div>Number of Deductions</div>
          <div>Pay Run</div>
          <div>Type</div>
          <div>Start Date</div>
          <div>End Date</div>
        </div>
        <div className={styles.Deductionsimg}>
          <img src={Clipath} />
        </div>
        <div>There are no records to display</div>
      </div>
    </div>
  );
};
