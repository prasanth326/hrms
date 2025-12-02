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

const leaveTypes = [
  "Casual Leave",
  "Sick Leave",
  "Earned Leave",
  "Work From Home",
  "Unpaid Leave",
];

const LeaveRequestModal = ({ open, setOpen }) => {
  const [form, setForm] = useState({
    type: "",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>New Leave Request</DialogTitle>

      <DialogContent dividers>
        <TextField
          label="Leave Type"
          select
          fullWidth
          margin="normal"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          {leaveTypes.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="From Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.fromDate}
          onChange={(e) => setForm({ ...form, fromDate: e.target.value })}
        />

        <TextField
          label="To Date"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={form.toDate}
          onChange={(e) => setForm({ ...form, toDate: e.target.value })}
        />

        <TextField
          label="Reason"
          fullWidth
          margin="normal"
          multiline
          rows={3}
          placeholder="Enter reason for leave"
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value })}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!form.type || !form.fromDate || !form.toDate}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LeaveRequestModal;
