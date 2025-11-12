import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Styles from "./LetsgotoWork.module.css";
import clockin from "../../../assets/clockin.png";
import { useAttendance } from "../../../context/AttendanceContext";

const LetsgotoWork = () => {
  const { attendance, handleClockAction, getTodayRecord, calculateProgressiveWorkedTime } =
    useAttendance();

  const [date, setDate] = useState(new Date());
  const [liveWorkedTime, setLiveWorkedTime] = useState(""); 

  const todayStr = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    weekday: "long",
  });

  const todayRecord = attendance.find(
    (a) =>
      a.date ===
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
  );

  const lastRecord =
    todayRecord && todayRecord.records[todayRecord.records.length - 1];
  const isClockedIn = lastRecord && lastRecord.clockOut === null;

  const currentClockTime = isClockedIn
    ? lastRecord.clockIn
    : lastRecord?.clockOut || "00:00:00";

  const today = getTodayRecord();

   useEffect(() => {
    if (!today || !isClockedIn) {
      setLiveWorkedTime(today?.totalWork || "0h 0m");
      return;
    }

     const interval = setInterval(() => {
      const newTime = calculateProgressiveWorkedTime(today);
      setLiveWorkedTime(newTime);
    }, 30 * 1000);

     setLiveWorkedTime(calculateProgressiveWorkedTime(today));

    return () => clearInterval(interval);
  }, [today, isClockedIn, calculateProgressiveWorkedTime]);

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

      {today && (
        <div className={Styles.summary}>
          <p>
            <b>Date:</b> {today.date}
          </p>
          <p>
            <b>Total Worked (Progressive):</b>{" "}
            {isClockedIn ? liveWorkedTime : today.totalWork}
          </p>
          <p>
            <b>Records:</b>
          </p>
          <ul>
            {today.records.map((r, i) => (
              <li key={i}>
                {r.clockIn} → {r.clockOut || "Still Working"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LetsgotoWork;
