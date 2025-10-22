import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import no_bills from "../../../assets/no_bills.png"
import upload from "../../../assets/upload.png"

import styles from "./Reimbursement.module.css"
import { Button } from '@mui/material';
import ReimbursementTab from './ReimbursementTab/ReimbursementTab';

export default function Reimbursement() {
    const [activeTab, setActiveTab] = useState("")
    const [openTagexpense, setopenTagexpense] = useState(false);
        const [openNewExpense, setOpenNewExpense] = useState(false);


    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        setActiveTab("EXPENCES")
    }, [])
    return (
        <div className={styles.reimbursementConatiner}>
            <div className={styles.reimbursementTabs}>
                <div className={`${styles.expences} ${activeTab === "EXPENCES" ? styles.active : ""}`} onClick={() => setActiveTab("EXPENCES")}>EXPENCES</div>
                <div className={`${styles.expences} ${activeTab === "REIMBURSMENTS" ? styles.active : ""}`} onClick={() => setActiveTab("REIMBURSMENTS")}>REIMBURSMENTS</div>
                <div className={`${styles.expences} ${activeTab === "ADVANCES" ? styles.active : ""}`} onClick={() => setActiveTab("ADVANCES")}>ADVANCES</div>
            </div>
            {activeTab === "EXPENCES" ?
                <div className={styles.createNewandPreview}>
                    <div className={styles.createNew}>
                        <h2>Create New Expense</h2>
                        <Box sx={{ width: 250 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Select Expense Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Select Expense Type</MenuItem>
                                    <MenuItem value={20}>Select Expense Type</MenuItem>
                                    <MenuItem value={30}>Select Expense Type</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <div className={styles.expenceAndData}>
                            <div className={styles.expenceAndDataLable}>
                                <div>Expense Data</div>
                                <TextField id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={styles.expenceAndDataLable}>
                                <div>Expense Data</div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">INR</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Currency"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>INR</MenuItem>
                                        <MenuItem value={20}>Dollar</MenuItem>
                                        <MenuItem value={30}>Jap</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className={styles.expenceAndDataLable}>
                                <div>Amount</div>
                                <TextField id="outlined-basic" variant="outlined" />
                            </div>
                        </div>
                        <div className={styles.expenceAndData}>
                            <div className={styles.expenceAndDataLable}>
                                <div>Marchent</div>
                                <TextField id="outlined-basic" variant="outlined" />
                            </div>
                            <div className={styles.expenceAndDataLable}>
                                <div>Invoice number</div>
                                <TextField id="outlined-basic" variant="outlined" />
                            </div>
                        </div>
                        <div className={styles.expenceImageUploadBrowswer}>
                            <div className={styles.expenceImage}>
                                <img src={upload} />
                            </div>
                            <div className={styles.expenceUpload}>
                                <div>Upload your files here</div>
                                <div className={styles.expenceUploadfile}>Files Types: Pdf, Jpeg, Png, Jpg, Xlsx, Csv, Eml,Max size, 10 mb</div>
                            </div>
                            <div className={styles.expenceBrowswer}>Browse</div>
                        </div>
                        <div className={styles.expenceBrowswerbtn}>
                            <Button variant="outlined">Cencel</Button>
                            <Button variant="contained">Submit</Button>
                        </div>
                    </div>
                    <div className={styles.preview}>
                        <div className={styles.previewDiv}>Preview</div>
                        <div className={styles.previewimg}>
                            <img src={no_bills} />
                            <p>No expense selected</p>
                            <p>Open any expense and</p>
                            <p>preview will be loaded with</p>
                            <p>attachments automatically</p>
                        </div>
                    </div>
                </div>
                : ""}
            {activeTab === "REIMBURSMENTS" ? <ReimbursementTab setopenTagexpense={setopenTagexpense} openTagexpense={openTagexpense} setOpenNewExpense={setOpenNewExpense} openNewExpense={openNewExpense}/> : ""}
        </div>
    )
}
