import React, { useState } from 'react';
import Styles from "./Login.module.css";
import logo from '../../assets/logo.png'
import Signinpage from '../SigninPage/Signinpage';

const Login = () => {
    const [show, setShow]= useState(false)
    const loginClick=()=>{
     console.log("hello");
     }
     const handleClick=()=>{

     }
  return (
    <div className={Styles.Container}>
         <div className={Styles.rightLogin}>
          <div className={Styles.box}>
            <img src={logo} alt='logo'></img>
            <Signinpage/>
            <p className={Styles.Powered}>Powered By</p>
            <div className={Styles.Sports}>
            <p className={Styles.Pvt}>&copy; 2025 EASPORTS Pvt Ltd.</p>
            <div className={Styles.Policy}>
                <p>Cookie Policy</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
            </div>
          </div>
         </div>
    </div>
  )
}

export default Login
