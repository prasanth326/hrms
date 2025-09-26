import React from "react";
import employeeicon from "../../assets/employees.png";
import reimbursement from "../../assets/reimbursement.png";
import compensation2 from "../../assets/compensation2.png";
import attendance from "../../assets/attendance.png";
import HrPolicies from "../../assets/Hr-Policies.png";
import hrdocuments from "../../assets/hr-documents-new.png";
import performance from "../../assets/performance.png";
import OrgView from "../../assets/OrgView.png";
import Style from "./Acesspage.module.css";
import Flows from "../../assets/Flows.png";
import calendarcimg from "../../assets/calendarc-img.png";
import performanceCalender from "../../assets/performance.png";
import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";


const Accesspage = () => {
  const acessPageObject = [
    {
      img: employeeicon,
      title: "Task Box",
    },
    {
      img: employeeicon,
      title: "Employees",
    },
    {
      img: reimbursement,
      title: "Reimbursement",
    },
    {
      img: compensation2,
      title: "Employees",
    },
    {
      img: attendance,
      title: "Attendance",
    },
    {
      img: HrPolicies,
      title: "HR Documents",
    },
    {
      img: hrdocuments,
      title: "HR Documents",
    },
    {
      img: calendarcimg,
      title: "HR Documents",
    },
    {
      img: performance,
      title: "Performance",
    },
    {
      img: OrgView,
      title: "Org View",
    },
    {
      img: Flows,
      title: "Flows",
    },
    {
      img: performanceCalender,
      title: "performance",
    },
    {
      img: OrgView,
      title: "Org View",
    },
    {
      img: Flows,
      title: "Flows",
    },
  ];
  return (
    <div className={Style.container}>
      <div className={Style.navbar}>
        <div className={Style.navbarChild}>
          <div className={Style.logo}>
            <img src={logoaccess} alt="logo" />
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
            <div className={Style.profileIcon}><img src={notif} alt="notif" /></div>
            <div className={Style.profileicon}><img src={notif} alt="notif" /></div>
          </div>
        </div>
      </div>
      <div className={Style.dashboardContainer}>
        <div className={Style.access}><span><p>My Access</p></span></div>
        <div className={Style.dashboard}>
          {acessPageObject.map((card, i) => (
            <div className={Style.card} key={i}>
              <div className={Style.imageCard}>
                <img src={card.img} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accesspage;
