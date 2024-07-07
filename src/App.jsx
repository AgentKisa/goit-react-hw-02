import React from "react";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const feedbackLS = window.localStorage.getItem("feedbackLS");

    if (feedbackLS !== null) {
      return JSON.parse(feedbackLS);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbackLS", JSON.stringify(feedback));
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  let positiveFeedback = Math.round((good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback == 0 && <Notification totalFeedback={totalFeedback} />}
    </>
  );
};

export default App;
