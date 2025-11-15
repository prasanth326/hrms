import React, { useEffect, useState } from "react";
import { CompensationTab } from "./CompensationTab/CompensationTab";
import { FlexComponents } from "./FlexComponents/FlexComponents";
import CompensationHeading from "./CompensationHeading/CompensationHeading";
import styles from "./Compensation.module.css";
import { ItDeclarations } from "./ITDeclarations/ItDeclarations";
import { PaySlips } from "./PaySlips/PaySlips";
import { ExtraDeductions } from "./ExtraDeductions/ExtraDeductions";
import { Loans } from "./Loans/Loans";
import { PayrollDocuments } from "./PayrollDocuments/PayrollDocuments";
import { ExtraPayments } from "./ExtraPayments/ExtraPayments";
import { PayPackage } from "./PayPackage/PayPackage";
import TaxSheet from "./TaxSheet/TaxSheet";

export const Compensation = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    setActiveTab("Pay Package");
  }, []);

  return (
    <div className={styles.Compensation}>
      <CompensationHeading
        showValues={showValues}
        setShowValues={setShowValues}
      />
      <CompensationTab setActiveTab={setActiveTab} activeTab={activeTab} />
      {activeTab === "Pay Package" && <PayPackage showValues={showValues} />}
      {activeTab === "Flex Components" && (
        <FlexComponents showValues={showValues} />
      )}
      {activeTab === "IT Declarations" && (
        <ItDeclarations showValues={showValues} />
      )}
      {activeTab === "Pay Slips" && <PaySlips showValues={showValues} />}
      {activeTab === "Extra Deductions" && <ExtraDeductions />}
      {activeTab === "Extra Payments" && <ExtraPayments showValues={showValues}/>}
      {activeTab === "Loans" && <Loans />}
      {activeTab === "Payroll Documents" && <PayrollDocuments />}
      {activeTab === "Tax Sheet" && <TaxSheet showValues={showValues}/>}
    </div>
  );
};
