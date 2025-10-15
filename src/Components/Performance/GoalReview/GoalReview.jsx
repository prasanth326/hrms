import React from 'react'
import goalreview from "../../../assets/goalreview.png"
import styles from './GoalReview.module.css'

export default function GoalReview() {
  return (
    <div className={styles.goalReview}>
        <img src={goalreview}/>
        <p>You have not been assigned to any Review cycle</p>
    </div>
  )
}
