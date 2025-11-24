import React, { useState } from "react";
import DocumentsTab from "../DocumentsTab/DocumentsTab";
import styles from "./Documents.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Documentcategories from "../Documentcategories/Documentcategories";

export default function Documents() {

  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [visibleTable, setVisibleTable] = useState(true);

  return (
    <div>
      <DocumentsTab />

      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input placeholder="Search Review Cycle Name" readOnly />
        </div>

        <div className={styles.topIcons}>
          <button 
            className={styles.iconBtn} 
            onClick={() => setShowFilter(!showFilter)}
          >
            <FilterAltIcon />
          </button>

          <button 
            className={styles.iconBtn}
            onClick={() => setShowSettings(!showSettings)}
          >
            <SettingsIcon />
          </button>

          <button 
            className={styles.iconBtn}
            onClick={() => setVisibleTable(!visibleTable)}
          >
            <VisibilityIcon style={{ opacity: visibleTable ? 1 : 0.5 }} />
          </button>
        </div>
      </div>
      {showFilter && (
        <div className={styles.dropdownBox}>
          <p className={styles.dropdownTitle}>Filter Options</p>
          <select className={styles.dropdownSelect}>
            <option>All Documents</option>
            <option>Performance</option>
            <option>Compensation</option>
            <option>HR</option>
          </select>
        </div>
      )}
      {showSettings && (
        <div className={styles.dropdownBox}>
          <p className={styles.dropdownTitle}>Settings</p>
          <p className={styles.dropdownText}>More options coming soon...</p>
        </div>
      )}
      {visibleTable && <Documentcategories />}
    </div>
  );
}
