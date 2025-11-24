import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styles from "./NewTaxRegime.module.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 900,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 3,
};

const newRegimeSlabs = [
  { income: "Up to ₹ 3,00,000", rate: "Nil" },
  { income: "From ₹ 3,00,001 to ₹ 6,00,000", rate: "5%" },
  { income: "From ₹ 6,00,001 to ₹ 9,00,000", rate: "10%" },
  { income: "From ₹ 9,00,001 to ₹ 12,00,000", rate: "15%" },
  { income: "From ₹ 12,00,001 to ₹ 15,00,000", rate: "20%" },
];

export default function NewTaxRegime({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={Boolean(open)} onClose={handleClose} aria-labelledby="new-tax-title">
      <Box sx={modalStyle}>
        <div className={styles.modalHeader}>
          <Typography id="new-tax-title" variant="h6" className={styles.modalTitle}>
            THE NEW TAX REGIME
          </Typography>
          <Button onClick={handleClose} size="small">Close</Button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.taxTable}>
            <thead>
              <tr>
                <th>On Income</th>
                <th>Tax Rate</th>
              </tr>
            </thead>

            <tbody>
              {newRegimeSlabs.map((row, idx) => (
                <tr key={idx} className={styles.taxRow}>
                  <td className={styles.taxCell}>{row.income}</td>
                  <td className={`${styles.taxCell} ${styles.taxRate}`}>{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </Modal>
  );
}
