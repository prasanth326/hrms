import React, { useState } from "react";
import styles from "./ExtraPayments.module.css";

export const ExtraPayments = ({ showValues }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      name: "Variable Pay Package",
      category: "Variable Pay Package",
      value: "10000",
      unit: "Amount",
      amount: "15000",
      type: "Regular",
      startDate: "01-06-2025",
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className={styles.ExtraPayments}>
      <div className={styles.ExtraPaymentsfirstdiv}>
        <h2>Extra Payments For FY25-26</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.value}</td>
                  <td>{item.unit}</td>
                  <td>{item.amount}</td>
                  <td>{item.type}</td>
                  <td>{item.startDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "15px" }}>
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
