import React, { createContext, useContext, useState } from "react";

const AttendanceContext = createContext();

export const useAttendance = () => useContext(AttendanceContext);

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState([]);

  const getToday = () =>
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

   const handleClockAction = () => {
    const now = new Date();
    const today = getToday();
    const time = now.toLocaleTimeString("en-GB", { hour12: false });

    setAttendance((prev) => {
      const existingDay = prev.find((a) => a.date === today);

      if (!existingDay) {
         return [
          ...prev,
          {
            date: today,
            records: [{ clockIn: time, clockOut: null }],
            totalWork: "0h 0m",
            status: "Present",
          },
        ];
      }

      const lastRecord = existingDay.records[existingDay.records.length - 1];

      if (lastRecord.clockOut === null) {
         lastRecord.clockOut = time;
      } else {
         existingDay.records.push({ clockIn: time, clockOut: null });
      }

       const totalWork = calculateTotalWorkedTime(existingDay);
      existingDay.totalWork = totalWork;

      const updated = prev.map((a) => (a.date === today ? existingDay : a));
      return [...updated];
    });
  };

   const calculateTotalWorkedTime = (dateObj) => {
    let totalMinutes = 0;

    dateObj.records.forEach((r) => {
      if (r.clockIn && r.clockOut) {
        const start = new Date(`${dateObj.date} ${r.clockIn}`);
        const end = new Date(`${dateObj.date} ${r.clockOut}`);

         if (end < start) {
          end.setDate(end.getDate() + 1);
        }

        totalMinutes += (end - start) / 1000 / 60;
      }
    });

    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.floor(totalMinutes % 60);
    return `${hours}h ${minutes}m`;
  };

   const getTodayRecord = () => {
    const today = getToday();
    return attendance.find((a) => a.date === today);
  };

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        handleClockAction,
        getTodayRecord,
        calculateTotalWorkedTime,
      }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};
