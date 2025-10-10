import React, { useEffect, useState } from "react";
import benifits1 from "../../../assets/benifits1.png";
import styles from "./SmartSuggestions.module.css";
import Feedback from "../Feedback/Feedback";

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
      image: benifits1,
      title: "SmartSuggestions",
      feedback: "Feedback",
      feedbackmsge: "You have not received feedback to come",
      day: "today?",
      action: "ACT",
    },
    {
      id: 2,
      image: benifits1,
      title: "Suggestions",
      feedback: "Feedback",
      feedbackmsge: "You have not received feedback to come",
      day: "today?",
      action: "ACT",
    },
    {
      id: 3,
      image: benifits1,
      title: "SmartIdeas",
      feedback: "Feedback",
      feedbackmsge: "You have not received feedback to come",
      day: "today?",
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
            <div>{value.feedback}</div>
            <div>{value.feedbackmsge}</div>
          </div>
          <div className={styles.SuggestionsToday}>
            <div>{value.day}</div>
            <div>
              <button className={styles.ACt}>{value.action}</button>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.pagination}>
        <div className={styles.paginationleft}>
          <div>{currentPage}/3</div>
        </div>
        <div className={styles.paginationright}>
          <div className={styles.paginationarrow} onClick={() => prevbtn()} style={{ pointerEvents: currentPage === 1 ? "none" : "auto", opacity: currentPage === 1 ? 0.5 : 1 }}>
            &lt;
          </div>
          <div className={styles.paginationarrow} onClick={() => nextbtn()} style={{ pointerEvents: currentPage === 3 ? "none" : "auto", opacity: currentPage === 3 ? 0.5 : 1 }}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartSuggestions;
