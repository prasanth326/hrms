import React, { useState } from "react";
import styles from "./LeaveHeaderTab.module.css";
import { Button } from "@mui/material";
import LeaveTab from "../LeaveTab/LeaveTab";
import LeaveRequestModal from "./LeaveRequestModal.jsx"; 

export default function LeaveHeaderTab({ setLeaveTab, leaveTab }) {
  const [openLeaveRequest, setOpenLeaveRequest] = useState(false); 

  return (
    <>
      <div className={styles.leaveHeaderTabcontinaer}>
        <div className={styles.leaveHeaderTab}>
          <div>Leave</div>

          <div className={styles.leaveHeaderTab2}>
            <LeaveTab setLeaveTab={setLeaveTab} leaveTab={leaveTab} />
          </div>

          <div className={styles.leaveHeaderTab234btn}>
            <Button
              variant="contained"
              onClick={() => setOpenLeaveRequest(true)}  
            >
              + Request &#136;
            </Button>
          </div>

          <div className={styles.leaveHeaderTab23btn}>
            <Button>+</Button>
          </div>
        </div>

        <div className={styles.leaveHeaderTab23}>
          <LeaveTab setLeaveTab={setLeaveTab} leaveTab={leaveTab} />
        </div>
      </div>

      <LeaveRequestModal
        open={openLeaveRequest}
        setOpen={setOpenLeaveRequest}
      />
    </>
  );
}
