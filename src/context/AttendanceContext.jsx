import { createContext, useContext, useEffect, useState } from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState([]);
  const userId = "6794c43e29fabc1234567890";

  const fetchTodayAttendance = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/attendance/today/${userId}`);
      const data = await res.json();
      setAttendance(data || null);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTodayAttendance();
  }, [])

  const getTodayRecord = () => {
    return attendance || null;
  };

  const handleClockAction = async() => {
    try {
      const res = await fetch("http://localhost:5000/api/attendance/clock", {
        method: "POST",
        headers: { 'Content-Type': "application/json"},
        body: JSON.stringify({ userId }),
      });

      await fetchTodayAttendance();
    } catch (error){
      console.error(error)
    }
  };

  return (
    <AttendanceContext.Provider
      value={{
        attendance,
        handleClockAction,
        getTodayRecord,
        fetchTodayAttendance
       }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext)
