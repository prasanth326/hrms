import React, { useEffect, useState } from "react";
import styles from "./BenefitsTab.module.css";

import MyBenefits from "../MyBenefits/MyBenefits";
import BenefitSlips from "../BenefitSlips/BenefitSlips";
import MyRequests from "../MyRequests/MyRequests";

export default function BenefitsTab() {
  const [show, setShow] = useState("MyRequest");

  useEffect(() => {
    setShow("MyRequest");
  }, []);

  return (
    <div>
      <div className={styles.Tab}>
        <div
          className={`${show === "MyRequest" ? styles.activetab : ""}`}
          onClick={() => setShow("MyRequest")}
        >
          MyRequests
        </div>

        <div
          className={`${show === "MyBenefits" ? styles.activetab : ""}`}
          onClick={() => setShow("MyBenefits")}
        >
          My Benefits
        </div>

        <div
          className={`${show === "BenefitsSlips" ? styles.activetab : ""}`}
          onClick={() => setShow("BenefitsSlips")}
        >
          Benefits Slips
        </div>
      </div>

      {show === "MyRequest" && <MyRequests />}
      {show === "MyBenefits" && <MyBenefits />}
      {show === "BenefitsSlips" && <BenefitSlips />}
    </div>
  );
}
