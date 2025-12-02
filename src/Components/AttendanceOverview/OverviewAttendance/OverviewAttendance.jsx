import React, { useState } from "react";
import styles from "./OverviewAttendance.module.css";
import { Button } from "@mui/material";
import RequestModal from "../RequestModal.jsx"; 
const OverviewAttendance = () => {
  const [openRequest, setOpenRequest] = useState(false);

  return (
    <>
      <div className={styles.Overview}>
        <p className={styles.Overviewtext}>Overview</p>

        <Button 
          className={styles.requestBtn}
          variant="contained"
          onClick={() => setOpenRequest(true)}
        >
          + REQUEST
        </Button>
      </div>

      <RequestModal open={openRequest} setOpen={setOpenRequest} />
    </>
  );
};

export default OverviewAttendance;
