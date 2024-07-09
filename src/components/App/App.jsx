import React, { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "normalize.css";

const App = () => {
  const [feedbackList, setFeedbackList] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
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

  const totalFeedback =
    feedbackList.good + feedbackList.neutral + feedbackList.bad;

  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round((feedbackList.good / totalFeedback) * 100);

  const resetFeedback = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setFeedbackList(resetState);
  };

  const hasFeedback = totalFeedback > 0;

  return (
    <>
      <div className="">
        <Description />
        <Options
          handleFeedback={handleFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {hasFeedback ? (
          <Feedback
            feedbackList={feedbackList}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification message="No feedbacks yet" />
        )}
      </div>
    </>
  );
};

export default App;
