import React from "react";
import logo from '../../assets/logo.png';
import Styles from '../Login/Login.module.css';
import { useNavigate } from "react-router-dom";


const Ssologinpage = ({handleClick}) => {
  const navigate = useNavigate();

  const childHandleClick=()=>{
    handleClick(true)
  }
  const loginClick=()=>{
    navigate('/accesspage')
  }    
  return (
    <div className={Styles.signinContainer}>
      <h2>Single sign On</h2>
      <p>sign in with your identity provider</p>
      <button onClick={() => loginClick()} className={Styles.sso} type="submit">
        SSO Login
      </button>
      <p className={Styles.Or}>OR</p>
      <button onClick={() => childHandleClick()} type="submit">
        Sign in with EASPORTS Credentials
      </button>
    </div>
  );
};

export default Ssologinpage;
