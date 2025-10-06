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
        <div>00:00:00</div>
      </div>
      <div className={Styles.line}></div>
      <div className={Styles.shiftPolicy}>
        <div>Shift 10:00 - 19:00</div>
        <div><a href="#">View Policy</a></div>
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
