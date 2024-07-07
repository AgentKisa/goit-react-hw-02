import React from "react";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <div>Good: {feedback.good}</div>
      <div>Neutral: {feedback.neutral}</div>
      <div>Bad: {feedback.bad}</div>
      <div>Positive: {positiveFeedback}%</div>
    </div>
  );
};

export default Feedback;
