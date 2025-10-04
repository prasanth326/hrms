import React from "react";
import OverviewAttendance from "./OverviewAttendance/OverviewAttendance";
import PendingRequest from "./PendingRequest/PendingRequest";
import OvertimeDetails from "./OvertimeDetails/OvertimeDetails";
import LetsgotoWork from "./LetsgotoWork/LetsgotoWork";
import UpcomingTimeoff from "./UpcomingTimeoff/UpcomingTimeoff";
import AttendanceMetrics from "./AttendanceMetrics/AttendanceMetrics";
import LeaveBalance from "./LeaveBalance/LeaveBalance";
import WhoisoutintheTeam from "./WhoisoutintheTeam/WhoisoutintheTeam";
import styles from "./AttendanceOverview.module.css";

const AttendanceOverview = () => {
  return (
    <div className={styles.attendanceOverview}>
     <div className={styles.Overview}><OverviewAttendance /></div>
      <div className={styles.pendingLetsgo}>
       <div className={styles.pendingRequest}><PendingRequest /></div> 
        <div className={styles.letsgotoWork}><LetsgotoWork /></div>
      </div>
      <div className={styles.OvertimeDetailsContainer}>
        <div className={styles.OvertimeUpcoming}>
          <div className={styles.OvertimeDetails}>
            <OvertimeDetails />
          </div>
          <div className={styles.UpcomingTimeoff}>
            <UpcomingTimeoff />
          </div>
        </div>

        <div className={styles.AttendanceLeavewho}>
          <div className={styles.AttendanceLeave}>
           <div className={styles.AttendanceMetrics}><AttendanceMetrics /></div> 
           <div className={styles.LeaveBalance}><LeaveBalance /></div>
          </div>
          <div className={styles.timeoffWhoisout}>
           <div className={styles.WhoisoutintheTeam}> <WhoisoutintheTeam /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;
