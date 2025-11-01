import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import styles from "./HolidayList.module.css"
import { Button } from "@mui/material";


export default function HolidayList() {
    return (
        <div>
            <div>Holiday List - 2025</div>
            <div className={styles.searchActions}>
                <div className={styles.searchBox}>
                    <SearchIcon fontSize="small" />
                    <input
                        placeholder="Search"
                    />
                </div>

                <div className={styles.topIcons}>
                    <button className={styles.iconBtn}><FilterListIcon /></button>
                    <button className={styles.iconBtn}><SettingsIcon /></button>
                </div>
            </div>

            <div className={styles.tableHolidaydiv}>

                <table className={styles.tableHoliday}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Occasion</th>
                            <th>Day</th>
                            <th>Holiday Type</th>
                            <th>Request Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.colr}>
                                <div>
                                    <span>01</span>
                                    <span>JAN</span>
                                </div>
                            </td>
                            <td>New Year</td>
                            <td>Wednesday</td>
                            <td>Optinal Holiday</td>
                            <td></td>
                            <td><Button variant="outlined">Request</Button></td>
                        </tr>
                        <tr>
                            <td className={styles.colr2}>
                                <div>

                                    <span>14</span>
                                    <span>JAN</span>
                                </div>
                            </td>
                            <td>Makar Sankranti</td>
                            <td>Thursday</td>
                            <td>Holiday</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={styles.colr2}>
                                <div>

                                    <span>14</span>
                                    <span>MAR</span>
                                </div>
                            </td>
                            <td>Holi</td>
                            <td>Friday</td>
                            <td>Holiday</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={styles.colr}>
                                <div>

                                    <span>01</span>
                                    <span>APR</span>
                                </div>
                            </td>
                            <td>Eid-UI-Fitr</td>
                            <td>Tuesday</td>
                            <td>Optinal Holiday</td>
                            <td></td>
                            <td><Button variant="outlined">Request</Button></td>
                        </tr>
                        <tr>
                            <td className={styles.colr}>
                                <div>

                                    <span>18</span>
                                    <span>APR</span>
                                </div>
                            </td>
                            <td>Good Friday</td>
                            <td>Friday</td>
                            <td>Holiday</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={styles.colr2}>
                                <div>

                                    <span>15</span>
                                    <span>AUG</span>
                                </div>
                            </td>
                            <td>Independence Day</td>
                            <td>Friday</td>
                            <td>Holiday</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={styles.colr2}>
                                <div>

                                    <span>27</span>
                                    <span>AUG</span>
                                </div>
                            </td>
                            <td>Ganesh Chaturthi</td>
                            <td>Wednesday</td>
                            <td>Holiday</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className={styles.colr}>
                                <div>

                                    <span>01</span>
                                    <span>OCT</span>
                                </div>
                            </td>
                            <td>Navami</td>
                            <td>Wednesday</td>
                            <td>Optinal Holiday</td>
                            <td></td>
                            <td><Button variant="outlined">Request</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
