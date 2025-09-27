import accessPageObject from "./AccessPageData";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

import Style from "./Acesspage.module.css";


const Accesspage = () => {
  const access = accessPageObject();
  const navigate = useNavigate();

  return (
    <div className={Style.container}>
      <NavBar />
      <div className={Style.dashboardContainer}>
        <div className={Style.access}><span><p>My Access</p></span></div>
        <div className={Style.dashboard}>
          {access.map((card, i) => (
            <div className={Style.card} key={i}>
              <div className={Style.imageCard} onClick={()=> navigate(`/${card.title}/${card.id}`)}>
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
