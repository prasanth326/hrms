import React, { useMemo, useState } from "react";
import styles from "./FlowRequest.module.css";
import SearchIcon from "@mui/icons-material/Search";
import accessPageObject from "../../AccessPage/AccessPageData";
import FlowPaginationTable from "./FlowPaginationTable";
import FlowPagination from "./FlowPagination";
import InitiateModal from "./InitiateModal"; 
import { Button } from "@mui/material";

const INITIAL_DATA = [
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

function NoRecords({ label }) {
  return (
    <div className={styles.noRecords}>
      <div style={{ fontSize: 18, marginBottom: 8 }}>{label}</div>
      <div>There are no records to show.</div>
    </div>
  );
}

export default function FlowRequest() {
  const access = accessPageObject();

  const [data, setData] = useState(() => INITIAL_DATA);

  const [searchText, setSearchText] = useState("");
  const [pageItems, setPageItems] = useState(0);
  const [sortAsc, setSortAsc] = useState(false);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [expandedMap, setExpandedMap] = useState({});

  const [showInitiate, setShowInitiate] = useState(false);

  const toggleSort = () => {
    setSortAsc((s) => !s);
  };

  const onToggleExpand = (id) => {
    setExpandedMap((m) => ({ ...m, [id]: !m[id] }));
  };

  const btn = useMemo(() => {
    const counts = {
      active: data.filter((d) => (d.status || "").toLowerCase() === "active")
        .length,
      drafts: data.filter((d) => (d.status || "").toLowerCase() === "drafts")
        .length,
      completed: data.filter((d) => (d.status || "").toLowerCase() === "completed")
        .length,
      revoked: data.filter((d) => (d.status || "").toLowerCase() === "revoked")
        .length,
      all: data.length,
    };
    return [
      { name: "Active", number: counts.active, key: "active" },
      { name: "Drafts", number: counts.drafts, key: "drafts" },
      { name: "Completed", number: counts.completed, key: "completed" },
      { name: "Revoked", number: counts.revoked, key: "revoked" },
      { name: "All Workflow", number: counts.all, key: "all" },
    ];
  }, [data]);

  const [activebn, setActievbn] = useState("All Workflow");

  const filteredData = useMemo(() => {
    if (activebn === "All Workflow") return data;
    const found = btn.find((b) => b.name === activebn);
    const key = found ? found.key : "all";
    if (key === "all") return data;
    return data.filter((d) => (d.status || "").toLowerCase() === key);
  }, [activebn, data, btn]);

  const getPageItems = (total) => {
    setPageItems(total);
    const maxPage = Math.max(1, Math.ceil(total / perPage));
    if (page > maxPage) setPage(1);
  };

  const handleCreateCycle = (payload) => {
    const newId = String(Date.now());
    const newCycle = {
      id: newId,
      reviewCycleName: payload.reviewCycleName,
      completedDate: payload.startDate || "", 
      goalsOverallRating: "--",
      competenciesOverallRating: "--",
      performanceReview: "--",
      status: payload.status || "drafts", 
    };

    setData((prev) => [newCycle, ...prev]);

    setActievbn("All Workflow");
    setPage(1);
  };

  return (
    <div className={styles.flow}>
      <div className={styles.Buttonnn}>
        <Button variant="outlined" onClick={() => setShowInitiate(true)}>
          + INITATE
        </Button>
      </div>

      <div className={styles.btndivmain}>
        {btn?.map((res) => (
          <div
            key={res.name}
            className={`${styles.btndiv} ${
              res.name === activebn ? styles.actvbtn : ""
            }`}
            onClick={() => {
              setActievbn(res.name);
              setPage(1);
            }}
          >
            <div>{res.name}</div>
            <div>{res.number}</div>
          </div>
        ))}
      </div>

      <div className={styles.contentCard}>
        {filteredData.length === 0 ? (
          <NoRecords label={activebn} />
        ) : (
          <>
            <FlowPaginationTable
              data={filteredData}
              searchText={searchText}
              onSearch={setSearchText}
              sortAsc={sortAsc}
              toggleSort={toggleSort}
              page={page}
              perPage={perPage}
              onToggleExpand={onToggleExpand}
              expandedMap={expandedMap}
              getPageItems={getPageItems}
            />

            <FlowPagination
              page={page}
              setPage={setPage}
              perPage={perPage}
              setPerPage={setPerPage}
              total={pageItems}
              pageItems={pageItems}
            />
          </>
        )}
      </div>

      <InitiateModal
        open={showInitiate}
        onClose={() => setShowInitiate(false)}
        onCreate={handleCreateCycle}
      />
    </div>
  );
}
