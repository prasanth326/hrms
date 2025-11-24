import React from "react";
import styles from "./Modal.module.css";

const FilterModal = ({ onClose }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>Filter Options</h3>

        <div className={styles.body}>
          <label>Frequency</label>
          <select>
            <option>Any</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>

          <label>Pay Period</label>
          <input type="text" placeholder="Enter Pay Period" />
        </div>
        <div className={styles.footer}>
          <button onClick={onClose}>Apply</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
