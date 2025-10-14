import React, { useEffect, useState } from "react";
import { CompensationTab } from "./CompensationTab/CompensationTab";
import { FlexComponents } from "./FlexComponents/FlexComponents";
import CompensationHeading from "./CompensationHeading/CompensationHeading";
import styles from "./Compensation.module.css";
import { ItDeclarations } from "./ITDeclarations/ItDeclarations";
import { PaySlips } from "./PaySlips/PaySlips";

export const Compensation = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    setActiveTab("Pay Package");
  }, []);

  return (
    <div className={styles.Compensation}>
      <CompensationHeading showValues={showValues} setShowValues={setShowValues}  />
      <CompensationTab setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "Flex Components" && <FlexComponents showValues={showValues} />}
      {activeTab === "IT Declarations" && <ItDeclarations showValues={showValues} />}
      {activeTab === "Pay Slips" && <PaySlips showValues={showValues} />}
    </div>
  );
};
