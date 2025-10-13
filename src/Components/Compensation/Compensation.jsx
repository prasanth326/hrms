import React, { useState } from "react";
import { CompensationTab } from "./CompensationTab/CompensationTab";
import { FlexComponents } from "./FlexComponents/FlexComponents";

export const Compensation = () => {
  const [activeTab, setActiveTab] = useState("Pay Packages");
  return (
    <div>
      <CompensationTab setActiveTab={setActiveTab} activeTab={activeTab}/>
      {activeTab=== "Flex Components" && <FlexComponents/>}
    </div>
  );
};
