import React from "react";
import styles from "./YearlyPaySlipModal.module.css";

export default function YearlyPaySlipModal({ open = false, onClose = () => {} }) {
  if (!open) return null;

  const dummyPDF =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const months = [
    "Apr 2025", "May 2025", "Jun 2025", "Jul 2025", "Aug 2025", "Sep 2025",
    "Oct 2025", "Nov 2025", "Dec 2025",
    "Jan 2026", "Feb 2026", "Mar 2026"
  ];

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <h3 className={styles.title}>Yearly Pay Slips — 2025-26</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className={styles.body}>
          <p className={styles.lead}>Download monthly payslips for the financial year.</p>

          <div className={styles.list}>
            {months.map((m) => (
              <div key={m} className={styles.row}>
                <span className={styles.month}>{m}</span>

                <div className={styles.actions}>
                  <a
                    href={dummyPDF}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkBtn}
                    title={`View ${m}`}
                  >
                    View
                  </a>

                  <a
                    href={dummyPDF}
                    download
                    className={styles.linkBtn}
                    title={`Download ${m}`}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.footerNote}>
            <small>Note: these are dummy links for demo. Replace `dummyPDF` with your file URL.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
