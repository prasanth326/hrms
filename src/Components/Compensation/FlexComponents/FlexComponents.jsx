import React from 'react'
import { FlexiDeclaration } from './FlexiDeclaration'
import { AnnualAndMonthly } from './AnnualAndMonthly'
import styles from "./FlexComponents.module.css"

export const FlexComponents = () => {
  return (
    <div className={styles.FlexComponents}>
      <FlexiDeclaration/>
      <AnnualAndMonthly/>
    </div>
  )
}
