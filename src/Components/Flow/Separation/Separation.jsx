import React from "react";
import group from "../../../assets/groupcopy.png";
import styles from "./Separation.module.css";

export default function Separation() {
  return (
    <div>
      <div className={styles.Separationtitle}>Separation</div>
      <div className={styles.Separation}>
        <div className={styles.imageofseparation}>
          <img src={group} />
        </div>

        <div className={styles.invite}>
          <div className={styles.invitename}>INITIATE SEPARATION</div>
        </div>
      </div>
    </div>
  );
}
