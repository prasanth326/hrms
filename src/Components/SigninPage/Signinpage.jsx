import React, { useState } from "react";
import Styles from "./Signinpage.module.css";
import CustomSwitch from "../CustomSwitch/CustomSwitch";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Signinpage = () => {
  const [checked, setChecked] = React.useState(true);
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
    const [error, setError]= useState("");
  const navigate= useNavigate();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSignin =()=>{
    if (email=== ""|| password=== ""){
      setError("please enter both email and Password");
      return;
    }
    if (email === "pranitha@gmail.com" && password=== "123456"){
      navigate("/accesspage");
    }
    else{
      setError("Incorrect email or password");
    }
    }
  
  return (
    <div className={Styles.signinContainer}>
      <div  className={Styles.inputAndSwitchContainer}>
        <div className={Styles.inputContainer}>
          <input type="email" placeholder="Email / Emp ID" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
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
          {error && (
            <p style={{color: "red", marginBottom: "10px"}}>
              {error}
            </p>
          )}
          <Button sx={{
            backgroundColor:"rgb(138 133 221)",
            color:"#fff"
          }} type="submit" onClick={handleSignin}>Signin</Button>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
