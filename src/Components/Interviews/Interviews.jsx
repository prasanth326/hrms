import React, { useState } from 'react';
import styles from "./Interviews.module.css";
import { Button } from '@mui/material';
import weekoff from "../../assets/weekoff.png";

export default function Interviews() {
    const [activeTab, setActiveTab] = useState("important")
    const data = [
        {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        },
        {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        }, {
            interviewbtn: true,
            days: "2 days ago",
            deatils: "Interview candidate details"
        },
    ]

    const activeTabFn = (tab) => {
        setActiveTab(tab)
    }
    return (
        <div className={styles.InterviewsContainer}>
            <div className={styles.InterviewsTabContent}>
                <div className={styles.InterviewsTab}>
                    <div className={`${styles.tab} ${activeTab === "important" ? styles.active : ""}`} onClick={() => activeTabFn("important")}>Important (12)</div>
                    <div className={`${styles.tab} ${activeTab === "update" ? styles.active : ""}`} onClick={() => activeTabFn("update")}>Update (0)</div>
                </div>
                <div className={styles.diver}></div>
                <div className={styles.InterviewsTabBelow}>
                    {
                        data.map((dtls, i) => (
                            <div className={styles.InterviewsTabBelowdetls}>
                                <div className={styles.InterviewsTabBelowdetlsone}>
                                    <div className={styles.InterviewsTabBelowdetlsbtn}>{dtls.interviewbtn ? <Button sx={{color:"#787878ff"}}> <img src={weekoff} alt='weekoff'></img> Interviews</Button> : null}</div>
                                    <div className={styles.InterviewsTabBelowdetlsday}>{dtls.days}</div>
                                </div>
                                <div className={styles.InterviewsTabBelowdetlsful}>{dtls.deatils}</div>
                                <div className={styles.diver}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.content}>Choose an Item from list</div>
        </div>
    )
}
