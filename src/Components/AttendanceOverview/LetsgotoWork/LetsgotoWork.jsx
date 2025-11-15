import React, { useState } from "react";
import { Button } from "@mui/material";
import Styles from "./LetsgotoWork.module.css";
import clockin from "../../../assets/clockin.png";
import { useAttendance } from "../../../context/AttendanceContext";

const LetsgotoWork = () => {
  const { attendance, handleClockAction, getTodayRecord } = useAttendance();
  const [date] = useState(new Date());

  const todayStr = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    weekday: "long",
  });

  const todayRecord = getTodayRecord();

  const lastRecord =
    todayRecord && todayRecord.records[todayRecord.records.length - 1];
  const isClockedIn = lastRecord && lastRecord.clockOut === null;

  const currentClockTime = isClockedIn
    ? lastRecord.clockIn
    : lastRecord?.clockOut || "00:00:00";

  return (
    <div className={Styles.ContainerDiv}>
      <div className={Styles.LetsgetoWork}>Let's get to Work</div>

      <div className={Styles.DateandTime}>
        <div>{todayStr}</div>
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

      {/* {todayRecord && (
        <div className={Styles.summary}>
          <p>
            <b>Date:</b> {todayRecord.date}
          </p>
          <p>
            <b>Total Worked:</b> {todayRecord.totalWork}
          </p>
          <p>
            <b>Records:</b>
          </p>
          <ul>
            {todayRecord.records.map((r, i) => (
              <li key={i}>
                {r.clockIn} → {r.clockOut || "Still Working"}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default LetsgotoWork;
