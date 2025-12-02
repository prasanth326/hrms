import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "../../Performance/TabsTabs/PerformanceHistory.module.css";

const MOCK = [
  {
    id: "1",
    reviewCycleName: "Performance Review Cycle-July 2025",
    completedDate: "14-08-2025",
    goalsOverallRating: "--",
    competenciesOverallRating: "--",
    performanceReview: "--",
    status: "active",
  },
  {
    id: "2",
    reviewCycleName: "Performance Review Cycle-2024",
    completedDate: "06-05-2025",
    goalsOverallRating: "3",
    competenciesOverallRating: "--",
    performanceReview: "--",
    status: "completed",
  },
];

function parseDateDMY(dateStr) {
  const [dd, mm, yyyy] = (dateStr || "01-01-1970").split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

export const FlowPaginationTable = ({
  data = MOCK,
  searchText = "",
  onSearch,
  sortAsc,
  toggleSort,
  page = 1,
  perPage = 10,
  onToggleExpand,
  expandedMap = {},
  getPageItems,
}) => {
  const [localSearch, setLocalSearch] = useState(searchText || "");

  useEffect(() => {
    setLocalSearch(searchText || "");
  }, [searchText]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (typeof onSearch === "function") onSearch(localSearch);
    }, 250);
    return () => clearTimeout(t);
  }, [localSearch, onSearch]);

  const q = (localSearch || "").toLowerCase().trim();

  const filtered = useMemo(() => {
    const arr = (data || []).filter((r) =>
      (r.reviewCycleName || "").toLowerCase().includes(q)
    );
    arr.sort((a, b) => {
      const da = parseDateDMY(a.completedDate);
      const db = parseDateDMY(b.completedDate);
      return sortAsc ? da - db : db - da;
    });
    return arr;
  }, [data, q, sortAsc]);

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  useEffect(() => {
    if (typeof getPageItems === "function") getPageItems(total);
  }, [total, getPageItems]);

  const noop = () => {};

  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableHeader}>
        <div className={styles.searchActions}>
          <div className={styles.searchBox}>
            <SearchIcon fontSize="small" />
            <input
              placeholder="Search Review Cycle Name"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </div>

          <div className={styles.topIcons}>
            <button className={styles.iconBtn} onClick={noop}>
              <FilterListIcon />
            </button>

            <button className={styles.iconBtn} onClick={noop}>
              <SettingsIcon />
            </button>

            <button className={styles.iconBtn} onClick={noop}>
              <VisibilityIcon />
            </button>

            <button className={styles.iconBtn} onClick={noop}>
              <CloudDownloadIcon />
            </button>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: 36 }}></th>
              <th>Review Cycle Name</th>

              <th onClick={toggleSort} className={styles.sortable}>
                Completed Date
                <span className={styles.sortArrow}>{sortAsc ? "▲" : "▼"}</span>
              </th>

              <th>Goals Overall Rating</th>
              <th>Competencies Overall Rating</th>
              <th>Performance Review</th>
              <th style={{ width: 96 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pageItems.map((row) => {
              const expanded = !!expandedMap[row.id];
              return (
                <React.Fragment key={row.id}>
                  <tr className={styles.row}>
                    <td className={styles.expandCell}>
                      <button
                        className={styles.expandBtn}
                        onClick={() => onToggleExpand(row.id)}
                      >
                        {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                      </button>
                    </td>

                    <td className={styles.nameCell}>
                      <div className={styles.nameText}>{row.reviewCycleName}</div>
                    </td>

                    <td>{row.completedDate}</td>

                    <td>
                      {row.goalsOverallRating}
                      {row.goalsOverallRating !== "--" && (
                        <InfoOutlined className={styles.infoIcon} fontSize="small" />
                      )}
                    </td>

                    <td>{row.competenciesOverallRating}</td>
                    <td>{row.performanceReview}</td>

                    <td className={styles.actionsCell}>
                      <button className={styles.rowAction} onClick={noop}>
                        <CloudDownloadIcon />
                      </button>
                    </td>
                  </tr>

                  {expanded && (
                    <tr className={styles.expandedRow}>
                      <td />
                      <td colSpan={7} className={styles.expandedContent}>
                        <div>
                          <strong>Additional Details Coming Soon...</strong>
                          <div className={styles.placeholderText}>
                            Placeholder content for expanded row.
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}

            {pageItems.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: 24 }}>
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlowPaginationTable;
