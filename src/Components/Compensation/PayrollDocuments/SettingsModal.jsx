import React from "react";
import styles from "./Modal.module.css";

const SettingsModal = ({ onClose }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>Settings</h3>
        <div className={styles.body}>
          <label>
            <input type="checkbox" /> Show Document Code
          </label>
          <label>
            <input type="checkbox" /> Show Frequency
          </label>
        </div>
        <div className={styles.footer}>
          <button onClick={onClose}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
