import { styled } from "@mui/material";
import React from "react";
import Styles from "./LetsgotoWork.module.css";
import { Button } from "@mui/material";
import clockin from "../../../assets/clockin.png";

const LetsgotoWork = () => {
  return (
    <div className={Styles.ContainerDiv}>
      <div className={Styles.LetsgetoWork}>Let's get to Work</div>
      <div className={Styles.DateandTime}>
        <div>24th sep, 2025</div>
        <div>timer</div>
      </div>
      <div className={Styles.line}></div>
      <div className={Styles.shiftPolicy}>
        <div>shift</div>
        <div>view policy</div>
      </div>
      <div className={Styles.clockin}>
        <Button variant="contained">
          <img src={clockin} alt="clockin" />
          &nbsp;Clockin
        </Button>
      </div>
    </div>
  );
};
export default LetsgotoWork;
