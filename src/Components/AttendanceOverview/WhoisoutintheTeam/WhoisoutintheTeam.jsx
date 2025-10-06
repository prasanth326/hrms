import React from 'react'
import Styles from "./WhoisoutintheTeam.module.css";

const WhoisoutintheTeam = () => {

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
              <p className={Styles.teamDate}>{item.date} {item.count ? `(${item.count})` : ""}</p>
              {
                item.members && (
                  <div className={Styles.teamMembers}>
                    {
                      item.members.map((member, i) => (
                        <div key={i} className={Styles.teamMemberCircle}>
                          {member}
                        </div>
                      ))
                    }
                  </div>
                )
              }
              {!item.message && <div className={Styles.Line}>
                <div className={Styles.Divider}></div>
              </div>}
              {
                item.message && <p className={Styles.itemMessage}>{item.message}</p>
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default WhoisoutintheTeam
