import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import styles from "./TaxModal.module.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TaxModal({ setOpenCompareTax, openCompareTax, items }) {
    const handleClose = () => setOpenCompareTax(false);

    return (
        <div>
            <Modal
                open={openCompareTax}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        COMPARE TAX
                    </Typography>

                    <div className={styles.taxmodalContainer}>
                        {/* OLD TAX REGIME */}
                        <div>
                            <div>Old Tax Regime</div>
                            <table>
                                <thead>
                                    <tr className={styles.tableContainer}>
                                        <th>Income Slab</th>
                                        <th>Income Tax Rate</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{items?.Earnings}</td>
                                        <td>*****</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* NEW TAX REGIME */}
                        <div>
                            <div>New Tax Regime</div>
                            <table>
                                <thead>
                                    <tr className={styles.tableContainer}>
                                        <th>Earnings</th>
                                        <th>Monthly</th>
                                        <th>Annually</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{items?.Earnings}</td>
                                        <td>*****</td>
                                        <td>*****</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

