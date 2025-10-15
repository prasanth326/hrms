import React from "react";
import styles from "./PerformanceHistory.module.css";

export const Pagination = ({ page, setPage, perPage, setPerPage, total }) => {
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  return (
    <div className={styles.pagination}>
      <div className={styles.left}>
        Show
        <select
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1);
          }}
          className={styles.perPageSelect}
        >
          {[5, 10, 20, 50].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        per page
      </div>

      <div className={styles.center}>
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className={styles.pageBtn}
        >
          ◀
        </button>
        <div className={styles.pageIndicator}>{page}</div>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className={styles.pageBtn}
        >
          ▶
        </button>
      </div>

      <div className={styles.right}>
        {`of ${totalPages}`}
      </div>
    </div>
  );
};

export default Pagination;
