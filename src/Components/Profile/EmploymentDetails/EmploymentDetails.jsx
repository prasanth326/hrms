import React, { useState } from "react";
import styles from "./EmploymentDetails.module.css";
import { Switch, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#007bff",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24,
    height: 24,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#d3d6da",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function EmploymentDetails() {
    const [showValues, setShowValues]=useState(false)
  const toggleShowValues = (event) => {
    setShowValues(event.target.checked);
  };

  return (
    <div className={styles.EmploymentDetailstab}>
      <div className={styles.EmploymentDetails}>
        <div className={styles.EmploymentDetailstitle}>Employment Details</div>
        <div className={styles.EmploymentDetailsicon}>
          <div className={styles.showValues}>
            <FormControlLabel
              labelPlacement="start"
              control={
                <IOSSwitch checked={showValues} onChange={toggleShowValues} />
              }
              sx={{
                marginLeft: "10px",
                color: "#475569",
                fontWeight: 500,
                gap: "8px",
                ".MuiFormControlLabel-label": {
                  fontSize: "0.95rem",
                },
              }}
            />
          </div>{" "}
          <p>Table View</p>
        </div>
      </div>
      <div className={styles.WORKROLE}>Work Role</div>
      <div className={styles.EmploymentDetailsbox}>
        <div className={styles.titlesname}>Group Company</div>
        <div className={styles.titlesname}>Designation:</div>
        <div className={styles.titlesname}>Department:</div>
        <div className={styles.titlesname}>
          <div>Staff Category:</div>
          <div className={styles.subtitlesname}>Senior/Sr.Executive</div>
        </div>
        <div className={styles.titlesname}>
          <div>Grade</div>
          <div className={styles.subtitlesname}>JGS</div>
        </div>
        <div className={styles.titlesname}>From To:</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.officelocation}>Current Office Location</div>
      <div className={styles.location}>
        <div>hyderabad</div>
        <div>hyderabad</div>
      </div>
    </div>
  );
}
