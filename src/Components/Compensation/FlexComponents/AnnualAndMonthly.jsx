import React from "react";
import styles from "./AnnualAndMonthly.module.css";

export const AnnualAndMonthly = () => {
  const AnnualFlexi = [
    { Earnings: "Basic", monthly: "5000", annually: "200000" },
    { Earnings: "HRA", monthly: "5000", annually: "200000" },
    { Earnings: "Other Allownces", monthly: "5000", annually: "200000" },
    { Earnings: "Provident Fund", monthly: "5000", annually: "200000" },
    { Earnings: "CTC", monthly: "5000", annually: "200000" },
    {
      Earnings: "Variable Pay Package(IN Total CTC",
      monthly: "5000",
      annually: "200000",
    },
    { Earnings: "Total CTC", monthly: "5000", annually: "200000" },
  ];
  return (
    <div className={styles.AnnualAndMonthlyContainerdiv}>
      <h2>Annual & Monthly CTC</h2>
      <div className={styles.AnnualAndMonthlyContainer}>
        <table>
          <thead>
            <tr className={styles.tableContainer}>
              <th>Earnings</th>
              <th>Monthly</th>
              <th>Annually</th>
            </tr>
          </thead>
          <tbody>
            {AnnualFlexi.map((items) => (
              <tr>
                <td>{items.Earnings}</td>
                <td>{items.monthly}</td>
                <td>{items.annually}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
