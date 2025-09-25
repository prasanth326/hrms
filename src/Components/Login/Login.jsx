import React, { useState } from "react";
import Styles from "./Login.module.css";
import logo from "../../assets/logo.png";
import Signinpage from "../SigninPage/Signinpage";
import Ssologinpage from "../SSOlogin/ssologinpage";

const Login = () => {
  const [showSignin, setShowSignin] = useState(false);

  const handleClick = (e) => {
    setShowSignin(e);
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.rightLogin}>
        <div className={Styles.box}>
          <div className={Styles.logo}><img src={logo} alt="logo"></img></div>
          {showSignin ? (
            <Signinpage />
          ) : (
            <Ssologinpage handleClick={handleClick} />
          )}
          <p className={Styles.Powered}>Powered By</p>
          <div className={Styles.Sports}>
            <p className={Styles.Pvt}>&copy; 2025 EASPORTS Pvt Ltd.</p>
            <div className={Styles.Policy}>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
