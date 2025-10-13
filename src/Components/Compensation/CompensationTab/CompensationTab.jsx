import React from 'react'
import styles from "./CompensationTab.module.css"

export const CompensationTab = ({setActiveTab, activeTab}) => {
    const tabArray =["Pay Package", "Flex Components", "IT Declarations", "Tax Sheet", "Pay Slips", "Extra Payments","Loans", "Extra Deductions", "Payroll Documents"]
  return (
    <div className={styles.tabsnavigation}>
        {tabArray.map((tabitem,i)=>(
          <div className={`${styles.tabs} ${activeTab=== tabitem? styles.Tabactive : ""}`} onClick={()=>setActiveTab(tabitem)}>
            {tabitem}
          </div>
        ))}
    </div>
  )
}
