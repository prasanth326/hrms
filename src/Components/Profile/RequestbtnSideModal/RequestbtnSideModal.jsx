import React from "react";
import { Button } from "@mui/material";
import Clipath from "../../../assets/Clipath.png";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./RequestbtnSideModal.module.css";

export default function RequestbtnSideModal({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`}
      />
      <div
        className={`${styles.modal} ${
          isOpen ? styles.slideIn : styles.slideOut
        }`}
      >
        <div className={styles.header}>
          <h3>Request</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            {" "}
            x
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.searchBox}>
            <SearchIcon fontSize="small" />
            <input placeholder="Search Review Cycle Name" readOnly />
          </div>
          <div className={styles.DocumentParent}>
            <div className={styles.Document}>
              <div>Document Name</div>
              <div>Actions</div>
            </div>
            <div className={styles.imagediv}>
              <img src={Clipath} />
              <p>There are no records to display</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
