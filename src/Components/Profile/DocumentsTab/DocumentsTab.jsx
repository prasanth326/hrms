import React, { useState } from "react";
import styles from "./DocumentsTab.module.css";
import { Button } from "@mui/material";
import RequestbtnSideModal from "../RequestbtnSideModal/RequestbtnSideModal";

export default function DocumentsTab() {
  const [active, setActive] = useState("MyDocuments");
  const [isOpenDoc, setIsOpenDoc] = useState(false);

  return (
    <div className={styles.documentstab}>
      <div className={styles.documents}>
        <div
          className={`${styles.tabs} ${
            active === "MyDocuments" ? styles.activebtn : ""
          }`}
          onClick={() => setActive("MyDocuments")}
        >
          My Documents (0)
        </div>
        <div
          className={`${styles.tabs} ${
            active === "Acknowledgement" ? styles.activebtn : ""
          }`}
          onClick={() => setActive("Acknowledgement")}
        >
          Awaiting My Acknowledgement (0)
        </div>
        <div
          className={`${styles.tabs} ${
            active === "Approvals" ? styles.activebtn : ""
          }`}
          onClick={() => setActive("Approvals")}
        >
          Document Approvals (0)
        </div>
      </div>
      <div className={styles.documentsbtn}>
        <Button variant="contained" onClick={() => setIsOpenDoc(true)}>
          +Request
        </Button>
      </div>
      <RequestbtnSideModal
        isOpen={isOpenDoc}
        onClose={() => setIsOpenDoc(false)}
      />
    </div>
  );
}
