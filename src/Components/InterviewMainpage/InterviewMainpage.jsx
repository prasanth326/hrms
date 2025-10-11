import React from "react";

import emptyOvertime from "../../assets/emptyOvertime.png";

import style from "./InterviewMainpage.module.css";
import Priorities from "./Priorities";
import { Refferals } from "./Refferals";

export default function InterviewMainpage() {
  return (
    <div className={style.interviewMainpage}>
      <div className={style.image}>
        <img src={emptyOvertime} alt="emptyOvertime" />
      </div>

      <div className={style.content}>
        <div className={style.greet}>
          <div>Good Afternoon</div>
          <div>it's Monday, 28 sep</div>
        </div>
        <div className={style.priorities}>
          <Priorities />
        </div>
        <div className={style.refferals}>
            <Refferals/>
        </div>
        <div className={style.birthday}></div>
      </div>
      <div className={style.image2}>
        <img src={emptyOvertime} alt="emptyOvertime" />
      </div>
    </div>
  );
}
