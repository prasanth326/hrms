import React, { useMemo, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import styles from "./PaySlips.module.css";

const rows = [
  { id: "Sep 2025", payslips: 'Regular', TotalWorking: 500, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Aug 2025", payslips: 'Regular', TotalWorking: 300, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Jul 2025", payslips: 'Regular', TotalWorking: 800, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Jun 2025", payslips: 'Regular', TotalWorking: 290, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "May 2025", payslips: 'Regular', TotalWorking: 900, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Apr 2025", payslips: 'Regular', TotalWorking: 290, Gross: 150, Deduction: 300, TDS: 300 },
];

export default function PaySlipTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const dummyPDF =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const columns = useMemo(() => [
    { field: 'id', headerName: 'For Period', width: 150 },
    { field: 'payslips', headerName: 'Pay Slip Type', width: 150 },
    { field: 'TotalWorking', headerName: 'Total Working Hours', type: 'number', width: 160 },
    { field: 'Gross', headerName: 'Gross', type: 'number', width: 120 },
    { field: 'Deduction', headerName: 'Deduction', type: 'number', width: 120 },
    { field: 'TDS', headerName: 'TDS', type: 'number', width: 120 },
    {
      field: 'Actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const row = params.row;
        return (
          <div style={{ display: "flex", gap: 10 }}>
            <Button
              variant='outlined'
              size="small"
              sx={{ width: 80 }}
              onClick={() => handleView(row)}
            >
              View
            </Button>

            <Button
              variant='outlined'
              size="small"
              sx={{ width: 100, padding: 0 }}
            >
              <a
                href={dummyPDF}
                download
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  width: "100%",
                  height: "100%",
                  padding: "6px 0",
                  textAlign: "center"
                }}
              >
                Download
              </a>
            </Button>
          </div>
        );
      }
    }
  ], []);

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          className={styles.mydatagrid}
          sx={{
            border: 0,
            '& .MuiTablePagination-actions': { display: "none" },
            '& .MuiTablePagination-displayedRows': { display: "none" },
            '& .MuiDataGrid-iconButtonContainer': { opacity: "1" },
            '& .MuiDataGrid-columnHeader': { backgroundColor: "#fff" },
            '& .MuiDataGrid-columnHeader:hover': { backgroundColor: "transparent" }
          }}
        />
      </Paper>

      {/* VIEW MODAL */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Pay Slip — {selectedRow?.id ?? ""}</DialogTitle>

        <DialogContent dividers>
          {selectedRow ? (
            <div style={{ display: "grid", gap: 8 }}>
              <Typography><strong>For Period:</strong> {selectedRow.id}</Typography>
              <Typography><strong>Pay Slip Type:</strong> {selectedRow.payslips}</Typography>
              <Typography><strong>Total Working Hours:</strong> {selectedRow.TotalWorking}</Typography>
              <Typography><strong>Gross:</strong> {selectedRow.Gross}</Typography>
              <Typography><strong>Deduction:</strong> {selectedRow.Deduction}</Typography>
              <Typography><strong>TDS:</strong> {selectedRow.TDS}</Typography>
            </div>
          ) : (
            <Typography>No Data</Typography>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
