import React, { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import s from "./App.module.css";

const App = () => {
  const [feedbackList, setFeedbackList] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedbackList");
    if (savedFeedback) {
      setFeedbackList(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
  }, [feedbackList]);

  const handleFeedback = (option) => {
    setFeedbackList((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedbackList;
    return good + neutral + bad;
  };

  const resetFeedback = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
    };
    setFeedbackList(resetState);
    localStorage.setItem("feedbackList", JSON.stringify(resetState));
  };

  const positiveFeedback = () => {
    const total = totalFeedback();
    if (total === 0) return 0;
    return Math.round((feedbackList.good / total) * 100);
  };

  const hasFeedback = totalFeedback() > 0;

  return (
    <>
      <div className="">
        <Description />
        <Options
          handleFeedback={handleFeedback}
          resetFeedback={resetFeedback}
        />
        {hasFeedback ? (
          <Feedback
            feedbackList={feedbackList}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <p>No feedbacks yet</p>
        )}
      </div>
    </>
  );
};

export default App;
