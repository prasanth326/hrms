import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./ItDeclarations.module.css";

export const ItDeclarations = () => {
  const [activeHouseParty, setactiveHouseParty] = useState("");
  useEffect(() => {
    setactiveHouseParty("HouseParty");
  }, []);
  return (
    <div className={styles.ItDeclarationsContainer}>
      <div className={styles.ItDeclarations}>
        <div className={styles.firstdiv}>
          <div className={styles.TotalFinancial}>
            <div className={styles.Financial}>
              <p className={styles.FinancialYear}>
                IT Declaration for the Financial Year 2025-2026
                <span> CLOSED</span>
              </p>
              <p className={styles.NoFinancialYear}>
                Go Ahead with New Tax Regime (No tax Exemption/ Deductions Under
                Section 115BAC):
                <span> NEW</span>
              </p>
            </div>
            <div className={styles.HouseParty}>
              <div
                className={`${styles.Others} ${
                  activeHouseParty === "HouseParty" ? styles.activebtn : ""
                }`}
                onClick={() => setactiveHouseParty("HouseParty")}
              >
                House Party(U/S 24)
              </div>
              <div
                className={`${styles.Others} ${
                  activeHouseParty === "HouseParty80" ? styles.activebtn : ""
                }`}
                onClick={() => setactiveHouseParty("HouseParty80")}
              >
                {" "}
                Investment Declaration (U/S 80) & Others
              </div>
              <div
                className={`${styles.Others} ${
                  activeHouseParty === "Others" ? styles.activebtn : ""
                }`}
                onClick={() => setactiveHouseParty("Others")}
              >
                Others
              </div>
            </div>
          </div>
          <div className={styles.comparebuttons}>
            <Button variant="contained" sx={{backgroundColor: "#8a80fb"}}>COMPARE TAX</Button>
            <Button variant="outlined">Form 12BB</Button>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        SECTION 24 - INTEREST PAID ON HOUSING LOAN FOR A LET-OUT PROPERTY
        <span> (QUALIFIED AMOUNT: 200000 INR) &#9432;{" "}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.Notenegative}>
        Note: Negative Values in Amount indicates Amount paid and hence will be
        considered for exemption.
      </div>
      <div className={styles.viewversions}>VIEW VERSIONS OF IT DECLARATION <span>(0)</span></div>
      <div className={styles.viewversions}>VIEW VERSIONS OF POI <span>(0)</span></div>
    </div>
  );
};
