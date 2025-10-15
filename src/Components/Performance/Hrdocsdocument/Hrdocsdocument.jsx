import React from 'react'
import hrdocsdocument from "../../../assets/hrdocsdocument.png"
import styles from './Hrdocsdocument.module.css'

export default function Hrdocsdocument() {
  return (
    <div className={styles.goalReview}>
        <img src={hrdocsdocument}/>
        <p>You have not been assigned to any Review cycle</p>
    </div>
  )
}
