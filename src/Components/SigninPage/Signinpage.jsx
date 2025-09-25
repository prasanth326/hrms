import React from "react";
import logo from "../../assets/logo.png";
import Styles from "./Signinpage.module.css";
import Switch from "@mui/material/Switch";

const Signinpage = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={Styles.signinContainer}>
      <div className={Styles.inputContainer}>
        <input type="email" placeholder="Email/ Emp ID"></input>
        <input type="password" placeholder="Password"></input>
        <input type="text" placeholder="Dashboard"></input>
      </div>
      <div className={Styles.options}>
        <label>
          <Switch
            checked={checked}
            onChange={handleChange}
            slotProps={{ input: { "aria-label": "controlled" } }}
            sx={{
              width: "15px",
              height: "15px",
              marginTop: "5px",
              marginLeft: "6px",
            }}
          />
          Remember Me
        </label>
      </div>
      <div className={Styles.mainContainer}>
        <div className={Styles.password}>
          <a href="#">Forget Password</a>
          <button type="submit">Signin</button>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
