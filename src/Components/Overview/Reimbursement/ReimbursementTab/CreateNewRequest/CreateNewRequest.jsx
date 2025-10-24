import { Button } from "@mui/material";
import React from "react";
import styles from "./CreateNewRequest.module.css"

export default function CreateNewRequest() {
  return (
    <div className={styles.newRequest}>
      <div>
        <img src={requests} />
      </div>
      <div>No Reimbursement requests to show yet</div>
      <div> Click on the button below to raise a Reimbursement request</div>
      <div>
        <Button>CREATE REQUEST</Button>
      </div>
    </div>
  );
}
