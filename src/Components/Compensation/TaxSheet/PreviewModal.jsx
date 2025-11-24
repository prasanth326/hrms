import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import styles from "./PreviewModal.module.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 1100,
  maxHeight: "85vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 2,
};

export default function PreviewModal({ open, setOpen, rows = [], showValues = true, months = [] }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={Boolean(open)} onClose={handleClose} aria-labelledby="preview-title">
      <Box sx={modalStyle}>
        <div className={styles.header}>
          <Typography id="preview-title" variant="h6" className={styles.title}>
            Preview — Taxsheet
          </Typography>
          <IconButton onClick={handleClose} size="small" aria-label="close preview">
            <CloseIcon />
          </IconButton>
        </div>

        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table stickyHeader aria-label="preview-table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.particularsHeader}>Particulars</TableCell>
                <TableCell align="right">Earnings</TableCell>
                {months.map((m, i) => (
                  <TableCell key={i} align="right">{m}</TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.calories}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.fat}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.carbs}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.protein}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.calories}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.fat}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.carbs}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.protein}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
