import React from "react";
import DocumentsTab from "../DocumentsTab/DocumentsTab";
import styles from "./Documents.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Documentcategories from "../Documentcategories/Documentcategories";

export default function Documents() {
  return (
    <div>
      <DocumentsTab />
      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input placeholder="Search Review Cycle Name" readOnly />
        </div>
        <div className={styles.topIcons}>
          <button className={styles.iconBtn}>
            <FilterAltIcon />
          </button>
          <button className={styles.iconBtn}>
            <SettingsIcon />
          </button>
          <button className={styles.iconBtn}>
            <VisibilityIcon />
          </button>
        </div>
      </div>
      <Documentcategories/>
    </div>
  );
}
