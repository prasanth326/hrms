import React from "react";
import Styles from "./Signinpage.module.css";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Signinpage = () => {
  const [checked, setChecked] = React.useState(true);

  const navigate= useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={Styles.signinContainer}>
      <div  className={Styles.inputAndSwitchContainer}>
        <div className={Styles.inputContainer}>
          <input type="email" placeholder="Email / Emp ID"></input>
          <input type="password" placeholder="Password"></input>
          <input type="text" placeholder="Dashboard"></input>
        </div>
        <div className={Styles.options}>
          <label>
            <CustomSwitch />
            <span>Remember Me</span>
          </label>
        </div>
      </div>
      <div className={Styles.mainContainer}>
        <div className={Styles.password}>
          <a href="#">Forgot Password</a>
          <Button sx={{
            backgroundColor:"rgb(138 133 221)",
            color:"#fff"
          }} type="submit" onClick={()=>navigate("/accesspage")}>Signin</Button>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
