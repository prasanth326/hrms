import React from 'react'
import styles from "./ReqModal.module.css"

export default function ReqModal({ isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.modalReq} ${isOpen ? styles.showOverlay2 : ""}`} onClick={onClose}>
                <div className={`${styles.modal2} ${isOpen ? styles.slideIn2 : styles.slideOut2}`}>
                    <div  className={styles.twoBtns1}>
                        <div className={styles.twoBtnscrtNewAllStarted}>Let's get Started!</div>
                        <div>You can configure a new request form or reuse a preious one</div>
                        <div className={styles.twoBtns}>
                            <div className={styles.twoBtnscrtNew}>
                                <div>Icons</div>
                                <div className={styles.twoBtnscrtNew1}>
                                    <div>Create new form</div>
                                    <div>A fresh non-configured form will appear</div>
                                </div>
                            </div>
                            <div className={styles.twoBtnscrtNewAll}>
                                <div>Icons</div>
                                <div className={styles.twoBtnscrtNew1}>
                                    <div>All Parameters</div>
                                    <div>All feedBack parameters will be selected</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
