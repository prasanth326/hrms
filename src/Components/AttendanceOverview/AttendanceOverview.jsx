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
      <div className={styles.overviewAttendance}> <OverviewAttendance /></div>
      <div className={styles.pendingOverAttendLeave}>
        <div className={styles.pendingOver}>
          <div className={styles.pendingRequest}>
            <PendingRequest />
          </div>
          <div className={styles.overtimeDetails}>
            <OvertimeDetails />
          </div>
          <div className={styles.attendLeave}>
            <div className={styles.attendanceMetrics}>
              <AttendanceMetrics />
            </div>
            <div className={styles.leaveBalance}>
              <LeaveBalance />
            </div>
          </div>
        </div>

        <div className={styles.letUpWho}>
          <div className={styles.letsgotoWork}>
            <LetsgotoWork />
          </div>
          <div className={styles.upcomingTimeoff}>
            <UpcomingTimeoff />
          </div>
          <div className={styles.whoisoutintheTeam}>
            <WhoisoutintheTeam />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;
