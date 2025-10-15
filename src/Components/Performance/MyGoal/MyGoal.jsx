import React from 'react';
import styles from './MyGoal.module.css';
import keygoal from "../../../assets/keygoal.png"
import OrgGoals from "../../../assets/OrgGoals.png"
import more from "../../../assets/more.png";
import pencile from "../../../assets/pencile.png"
import addicon from "../../../assets/addicon.png"


const MyGoal = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={styles.header}>
                    <h1>My Goal Plan</h1>
                </div>

                <div className={styles.waringsubp}>
                    <div className={styles.waringsub}>
                        <p className={styles.warning}><i class="fa fa-bell" style={{ color: "#aad1e7" }}></i>
                            The total Weightage of your Goal Plan is not 100. Please update Weightage and submit. <span>90%</span></p>
                        <button className={styles.submitButton}>Submit</button>
                    </div>
                </div>
                <div className={styles.goalSummary}>
                    <div className={styles.goalCount}>
                        <span>Total Goals / Key Result Areas</span>
                        <h3><span><img src={keygoal} /></span>8</h3>
                    </div>
                    <div className={styles.subGoalCount}>
                        <span>Total Sub Goals</span>
                        <h3><span><img src={OrgGoals} /></span>1</h3>
                    </div>
                </div>

                <div className={styles.pillars}>
                    <div className={styles.pillar}>
                        <div className={styles.pillarinpro}>
                            <h4>Quality & Delivery Excellence</h4>
                            <span className={styles.status}>inProgress</span>
                        </div>
                        <div className={styles.pillarwei}>
                            <p>Weightage</p>
                            <p>30%</p>
                        </div>
                        <div className={styles.pillarweibtn2}>
                            <div className={styles.pillarweibtnimg}>
                                <img src={addicon} />
                                <img src={pencile} />
                                <img src={more} />
                            </div>
                            <button className={styles.detailsButton}>Show Details</button>
                        </div>

                    </div>
                    <div className={styles.pillar}>
                        <div className={styles.pillarinpro}>
                            <h4>Process Efficiency & Automation</h4>
                            <span className={styles.status}>inProgress</span>
                        </div>
                        <div className={styles.pillarwei}>
                            <p>Weightage</p>
                            <p>30%</p>
                        </div>
                        <div className={styles.pillarweibtn2}>
                            <div className={styles.pillarweibtnimg}>
                                <img src={addicon} />
                                <img src={pencile} />
                                <img src={more} />
                            </div>
                            <button className={styles.detailsButton}>Show Details</button>
                        </div>

                    </div>
                    <div className={styles.pillar}>
                        <div className={styles.pillarinpro}>
                            <h4>Team Development & Engagement</h4>
                            <span className={styles.status}>inProgress</span>
                        </div>
                        <div className={styles.pillarwei}>
                            <p>Weightage</p>
                            <p>30%</p>
                        </div>
                        <div className={styles.pillarweibtn2}>
                            <div className={styles.pillarweibtnimg}>
                                <img src={addicon} />
                                <img src={pencile} />
                                <img src={more} />
                            </div>
                            <button className={styles.detailsButton}>Show Details</button>
                        </div>

                    </div>
                    <div className={styles.pillar}>
                        <div className={styles.pillarinpro}>
                            <h4>Team Development & Engagement</h4>
                            <span className={styles.status}>inProgress</span>
                        </div>
                        <div className={styles.pillarwei}>
                            <p>Weightage</p>
                            <p>30%</p>
                        </div>
                        <div className={styles.pillarweibtn2}>
                            <div className={styles.pillarweibtnimg}>
                                <img src={addicon} />
                                <img src={pencile} />
                                <img src={more} />
                            </div>
                            <button className={styles.detailsButton}>Show Details</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyGoal;
