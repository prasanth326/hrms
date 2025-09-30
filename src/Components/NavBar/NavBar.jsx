import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";

import Style from "../AccessPage/Acesspage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const NavBar = () => {
    const [showNoti, setShowNoti] = useState(false)
    const [showPro, setShowPro] = useState(false)

    const handleNoti = () => {
        setShowNoti((prev) => !prev)
        setShowPro(false)
    }
    
    const handlePro = () => {
        setShowPro((prev) => !prev)
        setShowNoti(false)
    }

    return (
        <div className={Style.container}>
            <div className={Style.navbar}>
                <div className={Style.navbarChild}>
                    <div className={Style.logo}>
                        <Link to="/accesspage" >
                            <img src={logoaccess} alt="logo" />
                        </Link>
                    </div>
                    <div className={Style.inputsrch}>
                        <input
                            type="text"
                            placeholder="search by Employee Name, Designation, Department..."
                        >
                        </input>
                        <div className={Style.profileIconSrch}><img src={search} alt="search" /></div>
                    </div>
                    <div className={Style.profile}>
                        <div className={Style.profileIconclock}><img src={clockin} alt="clockin" /></div>
                        <div className={Style.profileIconnotifi} onClick={() => handleNoti()}><img src={notif} alt="notif" /></div>
                        <div className={Style.profileicon} onClick={() => handlePro()}><img src={notif} alt="notif" /></div>
                    </div>
                </div>
            </div>
            {
                showNoti ? <div className={Style.notification}>
                    <div className={Style.notificat}>
                         <p>Notification 1</p>
                         <p>Notification 2</p>
                         <p>Notification 3</p>
                         <p>Notification 4</p>
                         <p>Notification 5</p>
                    </div>
                </div> : null
            }
            {
                showPro ? <div className={Style.profileNoti}>
                    <div className={Style.notificat}>
                         <p>Profile</p>
                         <p>Profile</p>
                         <p>Profile</p>
                    </div>
                </div> : null
            }
        </div>
    );
};

export default NavBar;
