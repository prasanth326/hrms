import React, { createContext, useContext, useState } from "react";

const AttendanceContext = createContext();
export const useAttendance = () => useContext(AttendanceContext);

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState([]);

  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", { hour12: false });

   const handleClockAction = () => {
    const now = new Date();
    const today = formatDate(now);
    const time = formatTime(now);

    setAttendance((prev) => {
      const updated = [...prev];
      let dayRecord = updated.find((d) => d.date === today);

       if (!dayRecord) {
        dayRecord = {
          date: today,
          records: [{ clockIn: time, clockOut: null }],
          totalWork: "0h 0m",
          status: "Present",
        };
        return [...updated, dayRecord];
      }

      const lastRec = dayRecord.records[dayRecord.records.length - 1];
      const nowDate = new Date();

       const lastClockDate = new Date(`${dayRecord.date} ${lastRec.clockIn}`);
      if (nowDate.getDate() !== lastClockDate.getDate()) {
        const newDay = {
          date: formatDate(now),
          records: [{ clockIn: time, clockOut: null }],
          totalWork: "0h 0m",
          status: "Present",
        };
        return [...updated, newDay];
      }

       if (lastRec.clockOut === null) {
        lastRec.clockOut = time;
      } else {
         dayRecord.records.push({ clockIn: time, clockOut: null });
      }

       dayRecord.totalWork = calculateProgressiveWorkedTime(dayRecord);

      return updated.map((d) => (d.date === dayRecord.date ? dayRecord : d));
    });
  };

   const calculateProgressiveWorkedTime = (dayObj) => {
    if (!dayObj.records.length) return "0h 0m";

    const firstIn = new Date(`${dayObj.date} ${dayObj.records[0].clockIn}`);
    let lastEvent = null;

     const lastRecord = dayObj.records[dayObj.records.length - 1];
    if (lastRecord.clockOut) {
      lastEvent = new Date(`${dayObj.date} ${lastRecord.clockOut}`);
    } else {
      lastEvent = new Date();  
    }

     if (lastEvent < firstIn) {
      lastEvent.setDate(lastEvent.getDate() + 1);
    }

    const diffMs = lastEvent - firstIn;
    const totalMinutes = Math.floor(diffMs / 1000 / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

   const getTodayRecord = () => {
    const today = formatDate(new Date());
    return attendance.find((a) => a.date === today);
  };

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        handleClockAction,
        getTodayRecord,
        calculateProgressiveWorkedTime,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};
