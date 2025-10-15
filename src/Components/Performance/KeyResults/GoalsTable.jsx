import React from "react";
import styles from "./GoalsTable.module.css";
import more from "../../../assets/more.png"

const goals = [
    {
        name: "Stakeholder Management & Satisfaction",
        status: "In Progress",
        start: "01-01-2025",
        end: "31-12-2025",
    },
    {
        name: "Efficiency",
        status: "In Progress",
        start: "01-01-2025",
        end: "31-12-2025",
    },
    {
        name: "Quality & Delivery Excellence",
        status: "In Progress",
        start: "01-01-2025",
        end: "31-12-2025",
    },
    {
        name: "Process Efficiency & Automation",
        status: "In Progress",
        start: "01-01-2025",
        end: "31-12-2025",
    },
    {
        name: "Team Development & Engagement",
        status: "In Progress",
        start: "01-01-2025",
        end: "31-12-2025",
    },
];

const GoalsTable = () => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>
                        Goals / Key Result Areas Name
                    </th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                </tr>
            </thead>
            <tbody>
                {goals.map((goal, i) => (
                    <tr key={i}>
                        <td className={styles.name}> 
                            <div>{goal.name} </div>
                            <div><img src={more} /></div>
                        </td>
                        <td>
                            <span className={styles.status}>{goal.status}</span>
                        </td>
                        <td>{goal.start}</td>
                        <td>{goal.end}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GoalsTable;
