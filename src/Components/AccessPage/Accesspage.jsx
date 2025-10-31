import accessPageObject from "./AccessPageData";

import { useNavigate } from "react-router-dom";

import Style from "./Acesspage.module.css";
import { useState } from "react";

const Accesspage = () => {
  const access = accessPageObject();
  const navigate = useNavigate();
  const [navigateTopage, setNavigateTopage] = useState("");

  const navigateFn = (nav) => {
    // setNavigateTopage(nav)
    console.log("NAV", nav)
    if (nav === "Attendance") {
      navigate("/Attendance/attendence")
    }
    else if (nav === "performance") {
      navigate("/Performance")
    }
    else if (nav === "performance") {
      navigate("/Performance")
    }
    else if (nav === "performance") {
      navigate("/Performance")
    }
    else if (nav === "performance") {
      navigate("/Performance")
    }

  }

  return (
    <div className={Style.container}>
      <div className={Style.dashboardContainer}>
        <div className={Style.access}><span><p>My Access</p></span></div>
        <div className={Style.dashboard}>
          {access.map((card, i) => (
            <div className={Style.card} key={i}>
              <div className={Style.imageCard} onClick={() => navigateFn(card.title)}>
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
