import React from "react";
import Styles from '../Login/Login.module.css';


const Signinpage = () => {
  return (
    <div>
      <h2>Single sign On</h2>
      <p>sign in with your identity provider</p>
      <button onClick={() => loginClick()} className={Styles.sso} type="submit">
        SSO Login
      </button>
      <p className={Styles.Or}>OR</p>
      <button onClick={() => handleClick()} type="submit">
        Sign in with EASPORTS Credentials
      </button>
    </div>
  );
};

export default Signinpage;
