import React from "react";

const tabList = [
  "Performance History",
  "Competency Assessment",
  "Potential Assessment",
  "Promotion Assessment",
  "N Grid Framework",
  "Review Parameter Assessment",
];

export const TabsTabs = ({ active, setActive }) => {
  return (
    <div className="ph-tabs">
      {tabList.map((t) => (
        <button
          key={t}
          className={`ph-tab ${active === t ? "ph-tab--active" : ""}`}
          onClick={() => setActive(t)}
          type="button"
        >
          {t}
        </button>
      ))}
    </div>
  );
};

export default TabsTabs;
