import React from "react";
import styles from "./ExtraPayments.module.css"

export const ExtraPayments = ({showValues}) => {
  return (
    <div className={styles.ExtraPayments}>
      <div className={styles.ExtraPaymentsfirstdiv}>
        <h2>Extra Payments For FY25-26</h2>
        <input type="text" placeholder="search" />
      </div>
      <div className={styles.ExtraPaymentstable}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Value</th>
              <th>Unit</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Variable Pay Package</td>
              <td>Variable Pay Package</td>
              <td>10000</td>
              <td>Amount</td>
              <td>15000</td>
              <td>Regular</td>
              <td>01-06-2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
