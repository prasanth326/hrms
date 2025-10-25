import React, { useEffect, useState } from 'react'
import styles from "./RequestFeedBack.module.css"
import { Switch, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import OverallRemark from '../OverallRemark/OverallRemark';


export default function RequestFeedBack() {
    const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 1,
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: "#007bff",
                opacity: 1,
                border: 0,
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 24,
        height: 24,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: "#d3d6da",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));

    const toggleShowValues = (event) => {
        setShowValues(event.target.checked);
    };

    const [selected, setSelected] = useState([]);
    const [tipIndex, setTipIndex] = useState(0);
    const [activeQns, setActiveQns] = useState("")
    useEffect(() => {
        setActiveQns("Questions")
    }, [])

    const goals = [
        "Stakeholder Managemnet & Satisfaction",
        "Efficiency",
        "Quality & Delivery Excellence",
        "Process Efficiency & Automation",
        "Team Development & Engagement",
        "Innovation & continuous improvements",
    ]

    const tips = [
        "Reflect on the feedback, Consider how  the feedback aligns with your own Goal/ key Result Areas and Values",
        "Use Feedback to identify areas of growth and improvments",
        "Set Actinable goals based on received feedback to track your progress",
        "Engage in regular discussions to understand feedback better"
    ]

    const handleSelectAll = () => {
        if (selected.length === GamesOutlined.length) {
            setSelected([])
        }
        else {
            setSelected(goals)
        }
    }

    const handleSelect = (goal) => {
        if (selected.includes(goal)) {
            setSelected(selected.filter((g) => g !== goal))
        } else {
            setSelected([...selected, goal])
        }
    }
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={`${styles.sidebarItem} ${activeQns === "Overall" && styles.active}`} onClick={() => setActiveQns("Overall")}>Overall Remarks</div>
                <div className={`${styles.sidebarItem} ${activeQns === "Questions" && styles.active}`} onClick={() => setActiveQns("Questions")}>Questions</div>
                <div className={`${styles.sidebarItem} ${activeQns === "Goals" && styles.active}`} onClick={() => setActiveQns("Goals")}>Goals / Keys Result Areas</div>

                <div className={styles.tipBox}>
                    <div className={styles.tipIcon}></div>
                    <p>{tips[tipIndex]}</p>
                    <div className={styles.dots}>
                        {
                            tips.map((_, i) => (
                                <span key={i} className={`${styles.dot} ${i === tipIndex ? styles.activeDot : ""}`} onClick={() => setTipIndex(i)}></span>
                            ))
                        }
                    </div>
                </div>
            </aside>
            {activeQns === "Questions" &&
                <main className={styles.main}>
                    <div className={styles.header}>
                        <h2>Request Feedback</h2>
                    </div>
                    <section className={styles.section}>
                        <h3>Questions</h3>
                        <button className={styles.addBtn}>+ Add your own question</button>
                    </section>

                    <section className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3>Goals / Key Result Areas</h3>
                            <FormControlLabel
                                label="Show Values"
                                labelPlacement="start"
                                control={
                                    <IOSSwitch
                                        checked=""
                                        onChange={toggleShowValues}
                                    />
                                }
                                sx={{
                                    marginLeft: "10px",
                                    color: "#475569",
                                    fontWeight: 500,
                                    gap: "8px",
                                    ".MuiFormControlLabel-label": {
                                        fontSize: "0.95rem",
                                    },
                                }}
                            />
                        </div>

                        <div className={styles.checkboxList}>
                            <label>
                                <input type='checkbox' onChange={handleSelectAll} checked={selected.length === goals.length} />
                                Select All
                            </label>
                            {
                                goals.map((goal) => (
                                    <label key={goal}>
                                        <input type="checkbox"
                                            checked={selected.includes(goal)}
                                            onChange={() => handleSelect(goal)} />
                                        {goal}
                                    </label>
                                ))
                            }
                        </div>
                    </section>

                    <div className={styles.actions}>
                        <button className={styles.cancelBtn}>Cancel</button>
                        <button className={styles.submitBtn}>Submit</button>
                    </div>
                </main>}

                 {activeQns === "Overall" && <OverallRemark />}
        </div>
    )
}
