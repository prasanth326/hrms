import React, { useEffect, useState } from "react";
import benifits1 from "../../../assets/benifits1.png";
import styles from "./SmartSuggestions.module.css";
import { Button } from "@mui/material";
import smartsuggestions from "../../../assets/smartsuggestions.png";

const SmartSuggestions = () => {
  const [currentPage, setCurrentpage] = useState(1);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const filtereddata = data.filter((item) => item.id === currentPage);
    console.log("f", filtereddata);
    setPage(filtereddata);
  }, [currentPage]);

  const prevbtn = () => {
    setCurrentpage((prev) => prev - 1);
  };
  const nextbtn = () => {
    setCurrentpage((prev) => prev + 1);
  };
  const data = [
    {
      id: 1,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Feedback",
      feedbackmsge:
        "You have not given Feedback to anyone in the last 30days, would you like to give Feedback to someone today?",
      action: "ACT",
    },
    {
      id: 2,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Feedback",
      feedbackmsge:
        "You have not received Feedback to anyone in the last 30days, would you like to request Feedback to someone today?",
      action: "ACT",
    },
    {
      id: 3,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Feedback",
      feedbackmsge:
        "You have not registered a Notes in the last 30days, would you like to  register today?",
      action: "ACT",
    },
  ];
  return (
    <div className={styles.Parent}>
      {page?.map((value, i) => (
        <div className={styles.SmartSuggestionsContainer}>
          <div className={styles.SmartSuggestions}>
            <div>
              <img src={value.image} />
            </div>
            <div className={styles.SuggestionsTitle}>{value.title}</div>
          </div>
          <div className={styles.SuggestionsFeedback}>
            <div className={styles.Feedback}>{value.feedback}</div>
            <div>{value.feedbackmsge}</div>
          </div>
          <div className={styles.SuggestionsToday}>
            <div>{value.day}</div>
            <div>
              <Button variant="outlined" className={styles.ACt}>
                {value.action}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        <div className={styles.paginationleft}>
          <div>{currentPage}/3</div>
        </div>
        <div className={styles.paginationright}>
          <div
            className={styles.paginationarrow}
            onClick={() => prevbtn()}
            style={{
              pointerEvents: currentPage === 1 ? "none" : "auto",
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            &lt;
          </div>
          <div
            className={styles.paginationarrow}
            onClick={() => nextbtn()}
            style={{
              pointerEvents: currentPage === 3 ? "none" : "auto",
              opacity: currentPage === 3 ? 0.5 : 1,
            }}
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSuggestions;
