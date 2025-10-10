import React, { useEffect, useState } from 'react'
import styles from "./IndividualFeedBackTab.module.css"

export default function IndividualFeedBackTab() {
    const [activeState, setActiveState] = useState("");

    const tabfn = (data) =>{
        setActiveState(data)
    }

    useEffect(()=>{
        setActiveState("ScoreBoard")
    },[])

    return (
        <div className={styles.individualFeedBackTab}>
            <div className={`${styles.tab} ${activeState === "Exeluation" ? styles.Exeluation : ""}`} onClick={() => tabfn("Exeluation")}>Exeluation Critaries</div>
            <div className={`${styles.tab} ${activeState === "Comments" ? styles.Exeluation : ""}`}  onClick={() => tabfn("Comments")}>Comments</div>
            <div className={`${styles.tab} ${activeState === "ScoreBoard" ? styles.Exeluation : ""}`} onClick={() => tabfn("ScoreBoard")}>ScoreBoard</div>
        </div>
    )
}
