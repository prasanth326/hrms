import { styled } from "@mui/material";
import React, { useState } from "react";
import Styles from "./LetsgotoWork.module.css";
import { Button } from "@mui/material";
import clockin from "../../../assets/clockin.png";

const LetsgotoWork = () => {
  const[date, setDate]= useState(new Date())
  const[clockTime, setClocktime]=useState(null)
  console.log("date",date)
  const today= date.toLocaleDateString("en-GB",{
    day:"2-digit",
    month:"short",
    weekday:"long"
  })
  const time= (date)=>date.toLocaleTimeString("en-GB",{
    hour12:false
  })
  const onclickfun=()=>{
     setClocktime(time(new Date()))
  }
  return (
    <div className={Styles.ContainerDiv}>
      <div className={Styles.LetsgetoWork}>Let's get to Work</div>
      <div className={Styles.DateandTime}>
        <div>{today}</div>
        <div>{clockTime?clockTime:"00:00:00"}</div>
      </div>
      <div className={Styles.line}></div>
      <div className={Styles.shiftPolicy}>
        <div>Shift 10:00 - 19:00</div>
        <div><a href="#">View Policy</a></div>
      </div>
      <div className={Styles.clockin}>
        <Button variant="contained" onClick={()=>onclickfun()}>
          <img src={clockin} alt="clockin" />
          &nbsp;{clockTime? "clockout": "clockin"}
        </Button>
      </div>
    </div>
  );
};
export default LetsgotoWork;
