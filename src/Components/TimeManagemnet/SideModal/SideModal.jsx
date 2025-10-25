import React from 'react'

import { Button } from '@mui/material'

import styles from "./SideModal.module.css"

export default function SideModal({ isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} />
            <div className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut}`}>
                <div className={styles.header}>
                    <h3>Work From Home Request</h3>
                    <button className={styles.closeBtn} onClick={onClose}> x</button>
                </div>
                <div className={styles.content}>
                    <form className={styles.from}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Shift Date From *</label>
                                <input type='date' defaultValue="2025-12-10" />
                            </div>
                            <div className={styles.field}>
                                <label>Shift Date to *</label>
                                <input type='date' defaultValue="2025-12-10" />
                            </div>
                        </div>
                        <p className={styles.infor}>
                            . The selected date range includes at least one Weekly off
                        </p>
                        <details className={styles.dropdown}>
                            <summary>Available Limits</summary>
                            <div className={styles.dropdownContent}>
                                <p>
                                    No limits available.
                                </p>
                            </div>
                        </details>

                        <div className={styles.checkboxRow}>
                            <input type="checkbox" id="overnight" />
                            <label htmlFor='overnight'>
                                Is Clockout time after 00:00 midnight on next date
                            </label>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Clockin Time</label>
                                <input type="time" defaultValue="10:00" />
                            </div>
                            <div className={styles.field}>
                                <label>Clockout Time</label>
                                <input type="time" defaultValue="19:00" />
                            </div>
                        </div>

                        <div className={styles.duration}>
                            Total Work Duration Per Day: <strong>09:00:00</strong>
                        </div>

                        <div className={styles.field}>
                            <label>Message *</label>
                            <textarea placeholder='Enter Details Here' row="4"></textarea>
                        </div>

                        <div className={styles.uploadSection}>
                            <div className={styles.uploadSectiona}>
                                <label>Attachment</label>
                                <div className={styles.uploadBox}>
                                    <div className={styles.uploadBoxx}>
                                        <input type='file' id="file" className={styles.fileInput} />
                                        <label htmlFor='file' className={styles.uploadLabel}>
                                            Upload
                                        </label>
                                    </div>
                                    <Button variant='outlined'>Browser</Button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonRow}>
                            <Button type="button" onClick={onClose} variant='outlined' className={styles.cancel}>Cancel</Button>
                            <Button type="button" onClick={onClose} variant='contained' className={styles.submit}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
