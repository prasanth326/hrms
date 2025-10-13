import React from 'react'
import styles from './AssessmentTab.module.css'


export default function AssessmentTab() {
    const assessment = ["Performance History", "competency Assessment", "Potential Assessment", "Promotion Assessment", "N Grid Framework", "Review Parameter Assessment"]
    return (
        <div className={styles.assessmentTab}>
            {
                assessment.map((assess) => (
                    <div>
                        {
                            assess
                        }
                    </div>
                ))
            }
        </div>
    )
}
