import React, { useState } from "react";
import { Button } from "@mui/material";
import Styles from "./LetsgotoWork.module.css";

import clockin from "../../../assets/clockin.png";
import { useAttendance } from "../../../context/AttendanceContext";

const LetsgotoWork = () => {
  const { getTodayRecord, handleClockAction } = useAttendance();
  const [date] = useState(new Date());

   const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "short",
  });

   const todayRecord = getTodayRecord();

   const lastEntry =
    todayRecord?.records?.[todayRecord.records.length - 1] || null;

   const isClockedIn = lastEntry && lastEntry.clockOut === null;

   const currentClockTime = isClockedIn
    ? lastEntry.clockIn
    : lastEntry?.clockOut || "00:00:00";

  return (
    <div className={Styles.ContainerDiv}>
       <div className={Styles.LetsgetoWork}>Let's get to Work</div>

       <div className={Styles.DateandTime}>
        <div>{formattedDate}</div>
        <div>{currentClockTime}</div>
      </div>

      <div className={Styles.line}></div>

       <div className={Styles.shiftPolicy}>
        <div>Shift 10:00 - 19:00</div>
        <div>
          <a href="#">View Policy</a>
        </div>
      </div>

       <div className={Styles.clockin}>
        <Button variant="contained" onClick={handleClockAction}>
          <img src={clockin} alt="clockin" />
          &nbsp;{isClockedIn ? "Clock Out" : "Clock In"}
        </Button>
      </div>
    </div>
  );
};

export default LetsgotoWork;
