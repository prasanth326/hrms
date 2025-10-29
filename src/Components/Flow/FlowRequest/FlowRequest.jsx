import React, { useMemo, useState } from 'react'
import styles from "./FlowRequest.module.css"
import SearchIcon from "@mui/icons-material/Search";
import accessPageObject from "../../AccessPage/AccessPageData";
import FlowPaginationTable from './FlowPaginationTable';
import FlowPagination from './FlowPagination';
import { Button } from '@mui/material';

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

export default function FlowRequest() {
    const access = accessPageObject();
    const data = useMemo(() => MOCK_DATA, []);
    const [searchText, _setSearchText] = useState("");
    const [pageItems, setPageItems] = useState("");
    const [sortAsc, setSortAsc] = useState(false);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [expandedMap, setExpandedMap] = useState({});

    const toggleSort = () => {
        setSortAsc((s) => !s);
    };

    const onToggleExpand = (id) => {
        setExpandedMap((m) => ({ ...m, [id]: !m[id] }));
    };
    const totalFiltered = data.filter((r) =>
        r.reviewCycleName
            .toLowerCase()
            .includes((searchText || "").toLowerCase().trim())
    ).length;

    const getPageItems = (data) => {
        setPageItems(data);
    };

    const btn=[
        {
            name:"Active",
            number:0
        },
        {
            name:"Drafts",
            number:0
        },
        {
            name:"Completed",
            number:0
        },
        {
            name:"Revoked",
            number:0
        },
        {
            name:"All Workflow",
            number:0
        },
    ]
const [activebn,setActievbn]=useState(btn[1].name)

    return (
        <div>
            <div className={styles.Buttonnn}>
                <Button variant='outlined'>+ INITATE</Button>
            </div>
            <div className={styles.btndivmain}>
                {
                    btn?.map((res)=>(
                        <div className={`${styles.btndiv} ${res.name === activebn && styles.actvbtn}`} onClick={()=>setActievbn(res.name)}>
                            <div>{res.name}</div>
                            <div>{res.number}</div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.contentCard}>
                <FlowPaginationTable
                    data={data}
                    searchText={searchText}
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
                    total={totalFiltered}
                    pageItems={pageItems}
                />
            </div>
        </div>
    )
}
