import React, { useEffect, useState } from "react";
import { CompensationTab } from "./CompensationTab/CompensationTab";
import { FlexComponents } from "./FlexComponents/FlexComponents";
import CompensationHeading from "./CompensationHeading/CompensationHeading";
import styles from './Compensation.module.css';

export const Compensation = () => {
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    setActiveTab("Pay Package");
  }, []);
  return (
    <div className={styles.Compensation}>
      <CompensationHeading />
      <CompensationTab setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "Flex Components" && <FlexComponents />}
    </div>
  );
};
