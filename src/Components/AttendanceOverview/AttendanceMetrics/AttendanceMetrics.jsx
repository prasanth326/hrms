import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./AttendanceMetrics.module.css";

const data = [
  { date: "29 Sep", logged: 8, late: 0.3, leave: 0 },
  { date: "30 Sep", logged: 9, late: 0.2, leave: 0 },
  { date: "01 Oct", logged: 6.5, late: 0.4, leave: 0 },
  { date: "02 Oct", logged: 0, late: 0, leave: 9 },
  { date: "03 Oct", logged: 10.2, late: 0.1, leave: 0 },
  { date: "04 Oct", logged: 0, late: 0, leave: 8.5 },
  { date: "05 Oct", logged: 0, late: 0, leave: 8.5 },
];

const AttendanceMetrics = () => {
  return (
    <div className={styles.metricsCard}>
      <div className={styles.header}>
        <h2 className={styles.title}>Attendance Metrics</h2>
        <select className={styles.dropdown}>
          <option className={styles.optionDrop}>Week</option>
          <option className={styles.optionDrop}>Month</option>
        </select>
      </div>

      <div className={styles.summaryBox}>
        <div>
          <p className={styles.value}>08:15</p>
          <p className={styles.label}>Avg. Work Duration</p>
        </div>
        <div>
          <p className={styles.value}>00:31</p>
          <p className={styles.label}>Avg. Late By</p>
        </div>
      </div>

      <div className={styles.hoursLabel}>Hours</div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 15]} ticks={[0, 5, 10, 15]} tick={{ fontSize: 12 }} />
            <Tooltip />
             <Bar dataKey="leave" fill="#dbe2f0" name="Weekly Off / Holiday / Leave" />
             <Bar
              dataKey="late"
              stackId="work"
              fill="#ffa726"
              name="Late By"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="logged"
              stackId="work"
              fill="#007bff"
              name="Logged Hours"
              radius={[4, 4, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.legend}>
        <div>
          <span className={`${styles.dot} ${styles.leave}`}></span>
          Weekly Off / Holiday / Leave
        </div>
        <div>
          <span className={`${styles.dot} ${styles.logged}`}></span>
          Logged Hours
        </div>
        <div>
          <span className={`${styles.dot} ${styles.late}`}></span>
          Late By
        </div>
      </div>
    </div>
  );
};

export default AttendanceMetrics;
