import React from 'react';

import styles from "./TaxSheet.module.css";
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#ccd3d6",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Basic', 159, 6.0, 24, 4.0),
    createData('HRA', 237, 9.0, 37, 4.3),
    createData('Other Allownaces', 262, 16.0, 24, 6.0),
    createData('Total Extra Payments', 305, 3.7, 67, 4.3),
    createData('Gross Salary(A)', 356, 16.0, 49, 3.9),
    createData('Deduction', 356, 16.0, 49, 3.9),
    createData('Provident Fund', 356, 16.0, 49, 3.9),
    createData('Professional Tax', 356, 16.0, 49, 3.9),
    createData('TDS', 356, 16.0, 49, 3.9),
    createData('Total Deductions(B)', 356, 16.0, 49, 3.9),
];

export default function TaxSheet({ showValues }) {


    return (
        <div className={styles.taxSheetMainDv}>
            <div className={styles.taxSheetMainbtndis}>
                <div className={styles.taxSheetIncome}>
                    <div className={styles.taxSheetIncomebtn}>
                        <div className={styles.taxSheetIncomebtn2}>Taxsheet</div>
                        <div className={styles.taxSheetIncomebtn4}>Income Tax Computation sheet</div>
                    </div>
                    <div className={styles.taxSheetnew}>
                        New Tax Regime
                    </div>
                </div>
                <div className={styles.taxSheetcurnry}>
                    <div className={styles.taxSheetcurnry2}>
                        Currency: INR
                    </div>
                    <div className={styles.taxSheetcurnry3}>
                        Preview
                    </div>
                    <div className={styles.taxSheetcurnry4}>
                        <Button variant='contained'>Download</Button>
                    </div>
                </div>
            </div>
            <div className={styles.taxSheetatble}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead >
                            <TableRow>
                                <StyledTableCell>Particulars</StyledTableCell>
                                <StyledTableCell align="right">Earnings</StyledTableCell>
                                <StyledTableCell align="right">May</StyledTableCell>
                                <StyledTableCell align="right">June</StyledTableCell>
                                <StyledTableCell align="right">July</StyledTableCell>
                                <StyledTableCell align="right">August</StyledTableCell>
                                <StyledTableCell align="right">September</StyledTableCell>
                                <StyledTableCell align="right">October</StyledTableCell>
                                <StyledTableCell align="right">November</StyledTableCell>
                                <StyledTableCell align="right">December</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.protein}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.protein}</StyledTableCell>
                                    <StyledTableCell align="right">{!showValues ? "****" : row.protein}</StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
