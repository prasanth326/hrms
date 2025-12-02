import React, { useState } from "react";
import styles from "./InitiateModal.module.css";

export default function InitiateModal({ open = false, onClose = () => {}, onCreate = () => {} }) {
  const [cycleName, setCycleName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [autoStart, setAutoStart] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    if (!cycleName.trim()) {
      setError("Please enter a cycle name.");
      return;
    }
    const payload = {
      reviewCycleName: cycleName.trim(),
      startDate: startDate || null,
      autoStart,
    };

    onCreate(payload);

    setCycleName("");
    setStartDate("");
    setAutoStart(false);
    setError("");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <header className={styles.header}>
          <h3 style={{ margin: 0 }}>Initiate Flow Cycle</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </header>

        <div className={styles.body}>
          <label className={styles.field}>
            <div className={styles.label}>Cycle Name</div>
            <input
              value={cycleName}
              onChange={(e) => setCycleName(e.target.value)}
              placeholder="e.g. Performance Review Cycle - July 2025"
            />
          </label>

          <label className={styles.field}>
            <div className={styles.label}>Start Date</div>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label className={styles.fieldInline}>
            <input
              type="checkbox"
              checked={autoStart}
              onChange={(e) => setAutoStart(e.target.checked)}
            />
            <span style={{ marginLeft: 8 }}>Auto-start when created</span>
          </label>

          {error && <div className={styles.error}>{error}</div>}
        </div>

        <footer className={styles.footer}>
          <button className={styles.cancel} onClick={onClose}>Cancel</button>
          <button className={styles.create} onClick={handleCreate}>Create</button>
        </footer>
      </div>
    </div>
  );
}
