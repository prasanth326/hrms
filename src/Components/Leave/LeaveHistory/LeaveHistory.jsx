import React from 'react'
import Styles from "./LeaveHistory.module.css";

const LeaveHistory = () => {

    const data = [
        {
            date: "Today",
            count: 1,
            members: ["AN", "DK", "MK", "MK"],
            color: "green"
        },
        {
            date: "Tomorrow",
            count: 1,
            members: ["AN", "DK", "MK", "MK"],
            color: "orange"
        },
        {
            date: "03-10-2025",
            count: 1,
            members: ["AN", "DK", "MK", "MK"],
            color: "orange"
        },
        {
            date: "04-10-2025 to 05-10-2025",
            message: "Team at its strongest! NO one's on Leave",
            color: "orange"
        }
    ]
    return (
        <div className={Styles.itemStepper}>
            <h3 className={Styles.teamTitle}>Who's out in the Team</h3>
            {
                data.map((item, index) => (
                    <div key={index} className={Styles.teamStepperItem}>
                        <div className={Styles.teamStepperLine}>
                            <span className={`${Styles.teamStepperDot} ${item.color === "green" ? Styles.dotGreen : Styles.dotOrange}`}>
                            </span>
                            {index !== data.length - 1 && <div className={Styles.teamStepperConnector}></div>}
                        </div>

                        <div className={Styles.teamStepperContent}>
                            <div className={Styles.leave1Compdiv}>
                                <div className={Styles.colorr2}></div>

                                <div className={Styles.leave1Comp}>
                                    <span className={Styles.leaveAddOne}>29-08-2025</span>
                                    <span className={Styles.leaveAddComp}>Compensatory Off (1 Day)</span>
                                </div>
                                <div className={Styles.leaveAdd}>
                                    <span className={Styles.leaveAddDotAdd}>Approved</span>
                                 </div>
                                {open === "Casual Leaves" && openB && <div className={Styles.LeaveDetails}>
                                    <div onClick={() => openTabDetails()}>Leave Details</div>

                                    <div>Casual Leaves credit list</div>
                                </div>
                                }
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LeaveHistory
