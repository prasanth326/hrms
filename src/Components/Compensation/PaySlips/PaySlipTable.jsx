import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import styles from "./PaySlips.module.css"

const columns = [
    { field: 'id', headerName: 'For Period', width: 150 },
    { field: 'payslips', headerName: 'Pay Slip Type', width: 150 },
    { field: 'TotalWorking', headerName: 'Total Working Hours', type: 'number', width: 150 },
    { field: 'Gross', headerName: 'Gross', type: 'number', width: 150 },
    { field: 'Deduction', headerName: 'Deduction', type: 'number', width: 150, },
    { field: 'TDS', headerName: 'TDS', type: 'number', width:150, },
    {
        field: 'Actions', headerName: 'Actions',flex: 1, renderCell: (params) => (
            <div style={{ display: "flex", gap: "10px" }}>
                <Button variant='outlined' sx={{ width: "80px" }}>View</Button>
                <Button variant='outlined' sx={{ width: "100px" }}>Download</Button>
            </div>
        )
    },
];

const rows = [
    {
        id: "Sep 2025", payslips: 'Regular', TotalWorking: 500, Gross: 300, Deduction: 300, TDS: 300
    },
    {
        id: "Aug 2025", payslips: 'Regular', TotalWorking: 300, Gross: 300, Deduction: 300, TDS: 300
    },
    {
        id: "Jul 2025", payslips: 'Regular', TotalWorking: 800, Gross: 300, Deduction: 300, TDS: 300
    },
    {
        id: "Jun 2025", payslips: 'Regular', TotalWorking: 290, Gross: 300, Deduction: 300, TDS: 300
    },
    {
        id: "May 2025", payslips: 'Regular', TotalWorking: 900, Gross: 300, Deduction: 300, TDS: 300
    },
    {
        id: "Apr 2025", payslips: 'Regular', TotalWorking: 290, Gross: 150, Deduction: 300, TDS: 300
    },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function PaySlipTable({showValues}) {
    return (
        <Paper sx={{  width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableColumnFilter
                disableColumnMenu
                disableColumnSorting
                className={styles.mydatagrid}
                sx={{
                    border: 0,
                    '& .MuiTablePagination-actions': {
                        display: "none"
                    },
                    '& .MuiTablePagination-displayedRows': {
                        display: "none"
                    },
                    '& .MuiDataGrid-iconButtonContainer': {
                        opacity: "1"
                    },
                     '& .MuiDataGrid-columnHeader': {
                        backgroundColor: "#fff"
                    },
                     '& .MuiDataGrid-columnHeader:hover': {
                        backgroundColor: "transparent"
                    },
                     '& .MuiDataGrid-columnHeaderTitleContainer:': {
                        display:"flex",
                        justifyContent: "center !important"
                    },
                  
                }}

            />
        </Paper>
    );
}
