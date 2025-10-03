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
      <OverviewAttendance />
      <div className={styles.pendingLetsgo}>
        <PendingRequest />
        <LetsgotoWork />
      </div>
      <div className={styles.OvertimeDetailsContainer}>
        <div className={styles.OvertimeUpcoming}>
          <div>
            <OvertimeDetails />
          </div>
          <div>
            <UpcomingTimeoff />
          </div>
        </div>

        <div className={styles.AttendanceLeavewho}>
          <div className={styles.AttendanceLeave}>
            <AttendanceMetrics />
            <LeaveBalance />
          </div>
          <div className={styles.timeoffWhoisout}>
            <WhoisoutintheTeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;
