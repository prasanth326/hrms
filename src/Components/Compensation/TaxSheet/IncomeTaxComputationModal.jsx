import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const IncomeTaxComputationModal = ({ open, setOpen, rows, showValues }) => {
  const handleClose = () => setOpen(false);

  const grossRow = rows.find((r) => r.name === "Gross Salary(A)");
  const monthlyGross = grossRow ? Number(grossRow.calories) : 0;
  const annualGross = monthlyGross * 12;
  const standardDeduction = 50000;
  const taxableIncome = Math.max(annualGross - standardDeduction, 0);

  const data = [
    { label: "Annual Gross Salary (A)", value: annualGross },
    { label: "Less: Standard Deduction (B)", value: standardDeduction },
    { label: "Taxable Income (A - B)", value: taxableIncome },
  ];

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Income Tax Computation (Summary)</DialogTitle>

      <DialogContent dividers>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Particulars</TableCell>
              <TableCell align="right">Amount (₹)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.label}>
                <TableCell>{row.label}</TableCell>
                <TableCell align="right">
                  {showValues ? row.value.toLocaleString("en-IN") : "******"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

       
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default IncomeTaxComputationModal;
