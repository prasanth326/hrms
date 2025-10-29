import SearchIcon from "@mui/icons-material/Search";
import accessPageObject from "../AccessPage/AccessPageData";
import { useNavigate } from "react-router-dom";

import styles from "./DashBoardSideBar.module.css";

export default function DashBoardSideBar({ isOpen, onClose }) {
    const access = accessPageObject();
    const navigate = useNavigate();

    const openAndClose = () => {
        navigate(`/profile/Overview`)
        onClose()
    }
    return (
        <>
            <div
                className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} onClick={onClose}
            />
            <div
                className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut
                    }`}
            >
                <div className={styles.header}>
                    <div className={styles.searchBox}>
                        <SearchIcon fontSize="small" />
                        <input placeholder="Search Review Cycle Name" readOnly />
                    </div>
                </div>
                <div className={styles.contentReq}>
                    <p>Recent Apps</p>
                    <div className={styles.dashboard}>
                        {access.slice(0, 8).map((card, i) => (
                            <div className={styles.card} key={i}>
                                <div className={styles.imageCard} onClick={openAndClose}>
                                    <img src={card.img} alt={card.title} />
                                </div>
                                <p>{card.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.contentAllApp}>
                    <p>All Apps</p>
                    <div className={styles.dashboard}>
                        {access.map((card, i) => (
                            <div className={styles.card} key={i}>
                                <div className={styles.imageCard} onClick={openAndClose}>
                                    <img src={card.img} alt={card.title} />
                                </div>
                                <p>{card.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
