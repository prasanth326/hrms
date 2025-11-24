import React, { useState } from "react";
import Clipath from "../../../assets/Clipath.png"
import filter from "../../../assets/filter.png";
import settingicon from "../../../assets/settingicon.png";
import FilterModal from "./FilterModal";
import SettingsModal from "./SettingsModal";
import styles from "./PayrollDocuments.module.css";

export const PayrollDocuments = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className={styles.PayrollDocumentstab}>
      <div className={styles.search}>
        <input type="text" placeholder="search" />
        <div className={styles.righticons}>
          <div className={styles.icon} onClick={() => setShowFilter(true)}>
            <img src={filter} alt="filter" />
          </div>
          <div className={styles.divider}></div>
          <div className={styles.icon} onClick={() => setShowSettings(true)}>
            <img src={settingicon} alt="settings" />
          </div>
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
            <img src={Clipath} alt="empty" />
          </div>
          <div>There are no records to display</div>
        </div>
      </div>

      {showFilter && <FilterModal onClose={() => setShowFilter(false)} />}
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </div>
  );
};
