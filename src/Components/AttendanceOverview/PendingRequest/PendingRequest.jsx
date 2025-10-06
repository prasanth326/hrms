import React from "react";
import styles from './PendingRequest.module.css';
import emptyOvertime from  '../../../assets/Vector2.png'

const PendingRequest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.PendingRequest}>Pending Request</div>
      <div className={styles.pendingimageContainer}>
        <div className={styles.imagediv}>
          <img src={emptyOvertime} alt="image" />
        </div>
        <div>
          <p>There are no pending requests</p>
        </div>
      </div>
    </div>
  );
};

export default PendingRequest;
