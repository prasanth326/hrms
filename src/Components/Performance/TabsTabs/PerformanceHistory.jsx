import React, { useState, useMemo } from "react";
import TabsTabs from "./TabsTabs";
import PerformanceTable from "./PerformanceTable";
import Pagination from "./Pagination";
import styles from "./PerformanceHistory.module.css";
import SearchIcon from "@mui/icons-material/Search";

 const MOCK_DATA = [
  {
    id: "1",
    reviewCycleName: "Performance Review Cycle-July 2025",
    completedDate: "14-08-2025",
    goalsOverallRating: "--",
    competenciesOverallRating: "--",
    performanceReview: "--",
  },
  {
    id: "2",
    reviewCycleName: "Performance Review Cycle-2024",
    completedDate: "06-05-2025",
    goalsOverallRating: "3",
    competenciesOverallRating: "--",
    performanceReview: "--",
  },
 ];

export const PerformanceHistory = () => {
  const [activeTab, setActiveTab] = useState("Performance History");
  const [searchText, setSearchText] = useState("");
  const [sortAsc, setSortAsc] = useState(false);  
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [expandedMap, setExpandedMap] = useState({});

  const data = useMemo(() => MOCK_DATA, []);

  const toggleSort = () => {
    setSortAsc((s) => !s);
  };

  const onToggleExpand = (id) => {
    setExpandedMap((m) => ({ ...m, [id]: !m[id] }));
  };

  const totalFiltered = data.filter((r) =>
    r.reviewCycleName.toLowerCase().includes((searchText || "").toLowerCase().trim())
  ).length;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <TabsTabs active={activeTab} setActive={setActiveTab} />

        <div className={styles.contentCard}>
          <div className={styles.headerRow}>
            <div className={styles.headerTitle}>
              <h2>Performance History</h2>
            </div>

            <div className={styles.searchRow}>
              <div className={styles.heroSearch}>
                <SearchIcon fontSize="small" />
                <input
                  placeholder="Search Review Cycle Name"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
            </div>
          </div>

          <PerformanceTable
            data={data}
            searchText={searchText}
            sortAsc={sortAsc}
            toggleSort={toggleSort}
            page={page}
            perPage={perPage}
            onToggleExpand={onToggleExpand}
            expandedMap={expandedMap}
          />

          <Pagination
            page={page}
            setPage={setPage}
            perPage={perPage}
            setPerPage={setPerPage}
            total={totalFiltered}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceHistory;
