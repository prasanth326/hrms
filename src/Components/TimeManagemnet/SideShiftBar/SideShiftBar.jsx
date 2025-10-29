import React from 'react'

import { Button } from '@mui/material'

import styles from "./SideShiftBar.module.css"

export default function SideShiftBar({ isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} />
            <div className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut}`}>
                <div className={styles.header}>
                    <h3>Shift Change Request</h3>
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
                        <div className={styles.dropdown2reason}>
                            <label>Select Shift</label>
                            <select className={styles.dropdown2}>
                                <option>Office</option>
                                <option>Home</option>
                            </select>
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
