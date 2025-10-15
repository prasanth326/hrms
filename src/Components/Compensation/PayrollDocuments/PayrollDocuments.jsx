import React from "react";
import Clipath from "../../../assets/Clipath.png";
import filter from "../../../assets/filter.png";
import settingicon from "../../../assets/settingicon.png";
import styles from "./PayrollDocuments.module.css";

export const PayrollDocuments = () => {
  return (
    <div className={styles.PayrollDocumentstab}>
      <div className={styles.search}>
        <input type="text" placeholder="search" />
        <div className={styles.righticons}>
         <div className={styles.icon}><img src={filter}/></div>
         <div className={styles.divider}></div>
        <div className={styles.icon}><img src={settingicon}/></div>
        </div>
      </div>
      <div className={styles.PayrollDocumentstablebox}>
        <div className={styles.Payroll}>
          <div className={styles.PayrollDocumentstable}>
            <div>Document UId</div>
            <div>Document Code</div>
            <div>Document Name</div>
            <div>Frequency</div>
            <div>Pay Period</div>
            <div>Pay Run</div>
            <div>Actions </div>
          </div>
          <div className={styles.PayrollDocumentsimg}>
            <img src={Clipath} />
          </div>
          <div>There are no records to display</div>
        </div>
      </div>
    </div>
  );
};
