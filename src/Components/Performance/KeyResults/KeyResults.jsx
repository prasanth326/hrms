import React, { useState } from "react";
import styles from "./KeyResults.module.css";
import GoalsTable from "./GoalsTable";
import filter from "../../../assets/filter.png"
import settingicon from "../../../assets/settingicon.png"
import requestedback from "../../../assets/requestedback.png"
import eye from "../../../assets/eye.png"


const KeyResults = () => {
    const [activeTab, setActiveTab] = useState("individual");

    const tabs = [
        { id: "wishlist", label: "Wishlist" },
        { id: "individual", label: "Individual Goals / Key Result Areas" },
        { id: "template", label: "Template Goals / Key Result Areas" },
    ];

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h2>Goals / Key Result Areas Explorer</h2>
                </div>

                <div className={styles.tabs}>
                    <div className={styles.tabsbtns}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <button className={styles.createBtn}>
                        Create Goals / Key Result Areas
                    </button>
                </div>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search by Goals / Key Result Areas Name or Owner Name"
                    />
                    <div className={styles.searchBarimg}>
                        <img src={filter} />
                        <img src={settingicon} />
                        <img src={requestedback} />
                        <img src={eye} />
                    </div>
                </div>

                {activeTab === "individual" && <GoalsTable activeTab={activeTab} />}
                {activeTab === "wishlist" && (
                    <div className={styles.emptyState}>Wishlist coming soon...</div>
                )}
                {activeTab === "template" && (
                    <div className={styles.emptyState}>Template Goals view</div>
                )}
            </main>
        </div>
    );
};

export default KeyResults;
