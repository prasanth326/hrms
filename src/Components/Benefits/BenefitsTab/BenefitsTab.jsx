import React, { useEffect, useState } from "react";

import styles from "./BenefitsTab.module.css";
import MyRequests from "../MyRequests/MyRequests";
export default function BenefitsTab() {
  const [show, setShow] = useState("");
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
      <MyRequests />
    </div>
  );
}
