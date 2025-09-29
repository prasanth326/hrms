import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";

import Style from "../AccessPage/Acesspage.module.css";
import { Link } from "react-router-dom";


const NavBar = () => {
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
                        <div className={Style.profileIconnotifi}><img src={notif} alt="notif" /></div>
                        <div className={Style.profileicon}><img src={notif} alt="notif" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
