import React, { useState } from "react";
import { FormControlLabel, Typography, Box, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSwitchButton = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#8a84dd",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    width: 22,
    height: 22,
    borderRadius: "50%",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: "#ccc",
    boxSwizing: "border-box",
  },
}));

export default function CustomSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="30px"
    >
      <FormControlLabel
        control={
          <CustomSwitchButton
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            height="30px"
          />
        }
      />
    </Box>
  );
}
