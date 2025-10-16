import React from "react";
import styles from "./TabsTabs.module.css"

const tabList = [
  "Performance History",
  "Competency Assessment",
  "Potential Assessment",
  "Promotion Assessment",
  "N Grid Framework",
  "Review Parameter Assessment",
];

export const TabsTabs = ({ active, setActive }) => {

  return (
    <div className={styles.tabbtnns}>
      {tabList.map((t) => (
        <button
          key={t}
          className={`${styles.phtab} ${active === t ? styles.phtabactive : ""}`}
          onClick={() => setActive(t)}
          type="button"
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default TabsTabs;
