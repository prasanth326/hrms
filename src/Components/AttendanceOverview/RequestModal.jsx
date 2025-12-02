import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const requestTypes = [
  "Work From Home",
  "Permission",
  "On Duty",
  "Leave Request",
  "Attendance Regularisation",
];

const RequestModal = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    type: "",
    date: "",
    reason: "",
  });

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log("Request Submitted:", form);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Submit a Request</DialogTitle>

      <DialogContent dividers>
        <TextField
          label="Request Type"
          select
          fullWidth
          margin="normal"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          {requestTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Request Date"
          fullWidth
          type="date"
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <TextField
          fullWidth
          label="Reason"
          placeholder="Enter reason"
          margin="normal"
          multiline
          rows={3}
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit} disabled={!form.type || !form.date}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RequestModal;
