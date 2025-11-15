import React, { useRef, useEffect, useState } from 'react'
import styles from "./CompensationTab.module.css"

export const CompensationTab = ({ setActiveTab, activeTab }) => {
  const tabArray = [
    "Pay Package", "Flex Components", "IT Declarations", "Tax Sheet", 
    "Pay Slips", "Extra Payments", "Loans", "Extra Deductions", 
    "Payroll Documents"
  ];

  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, transform: "translateX(0)" });

  useEffect(() => {
    const container = containerRef.current;
    const activeEl = container.querySelector(`.${styles.Tabactive}`);

    if (activeEl) {
      setSliderStyle({
        width: activeEl.offsetWidth,
        transform: `translateX(${activeEl.offsetLeft}px)`
      });
    }
  }, [activeTab]);

  return (
    <div className={styles.tabsnavigation} ref={containerRef}>
      {tabArray.map((tab, i) => (
        <div
          key={i}
          className={`${styles.tabs} ${
            activeTab === tab ? styles.Tabactive : ""
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}

      <div
        className={styles.slider}
        style={{ width: sliderStyle.width, transform: sliderStyle.transform }}
      />
    </div>
  );
};
