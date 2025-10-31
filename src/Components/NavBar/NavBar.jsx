import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";
import menu from "../../assets/menu.png";
import more from "../../assets/more.png";

import { useNavigate } from "react-router-dom";

import Style from "../AccessPage/Acesspage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import styles from "./NavBar.module.css";
import DashBoardSideBar from "../DashBoardSideBar/DashBoardSideBar";

const NavBar = ({ qrlocation }) => {
  const [showNoti, setShowNoti] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [showDashboard, setShowDashBoard] = useState(false);
  const [width, setWidth] = useState(window.innerWidth)

  const navigate = useNavigate()

  const handleNoti = () => {
    setShowNoti((prev) => !prev);
    setShowPro(false);
  };

  const handlePro = () => {
    setShowPro((prev) => !prev);
    setShowNoti(false);
  };

  const handleQr = () => {
    navigate("/QrCode")
    setShowPro(false)
  }

  const onclickMenu = () => {
    setShowMenu((prev) => !prev)
  }
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (width >= 720) {
      setShowMenu(false)
    }
  }, [width])
  return (
    <div className={Style.container}>
      <div className={Style.navbar}>
        <div className={Style.navbarChild}>
          <div className={Style.logo}>
            {
              qrlocation ?
                <img src={menu} alt="menu" onClick={() => { setShowDashBoard(true) }} /> :
                <Link to="/accesspage">
                  <img src={logoaccess} alt="logo" />
                </Link>
            }
          </div>
          <div className={Style.inputsrch}>
            <input
              type="text"
              placeholder="search by Employee Name, Designation, Department..."
            ></input>
            <div className={Style.profileIconSrch}>
              <img src={search} alt="search" />
            </div>
          </div>
          <div className={Style.profilemore2}>
            <div className={Style.profilemore} onClick={() => onclickMenu()}><img src={more} /></div>
            <div className={`${showMenu ? Style.profile : Style.profileHide}`}>
              <div className={Style.profileIconclock}>
                <img src={clockin} alt="clockin" />
              </div>
              <div
                className={Style.profileIconnotifi}
                onClick={() => handleNoti()}
              >
                <img src={notif} alt="notif" />
              </div>
              <div className={Style.profileicon} onClick={() => handlePro()}>
                <img src={notif} alt="notif" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNoti ? (
        <div className={Style.notification}>
          <div className={Style.notificat}>
            <p>Notification 1</p>
            <p>Notification 2</p>
            <p>Notification 3</p>
            <p>Notification 4</p>
            <p>Notification 5</p>
          </div>
        </div>
      ) : null}
      {showPro ? (
        <div className={styles.profileNoti}>
          <div className={styles.notificat}>
            <div className={styles.notificatcontainer}>
              <div className={styles.profileicon2}></div>
              <div className={styles.profileicon2BTN}>
                <Button variant="contained">VIEW PROFILE</Button>
              </div>
              <div className={styles.MobileQR} onClick={() => handleQr(true)}>
                <img />
                <p>Mobile QR Code</p>
              </div>
              <div className={styles.MobileQR}>
                <img />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {
        <DashBoardSideBar isOpen={showDashboard} onClose={() => setShowDashBoard(false)} />
      }
    </div>
  );
};

export default NavBar;
