import React from 'react'
import { FlexiDeclaration } from './FlexiDeclaration'
import { AnnualAndMonthly } from './AnnualAndMonthly'
import styles from "./FlexComponents.module.css"

export const FlexComponents = ({showValues}) => {
  return (
    <div className={styles.FlexComponents}>
      <FlexiDeclaration showValues={showValues}/>
      <AnnualAndMonthly showValues={showValues}/>
    </div>
  )
}
