import s from "./Feedback.module.css";

const Feedback = ({ feedbackList, totalFeedback, positiveFeedback }) => {
  const totalPositive = totalFeedback();
  return (
    <div>
      <ul>
        <li>
          <p>Good:{feedbackList.good}</p>
        </li>
        <li>
          <p>Neutral:{feedbackList.neutral}</p>
        </li>
        <li>
          <p>Bad:{feedbackList.bad}</p>
        </li>
        <li>
          <p>Total:{totalPositive}</p>
        </li>
        <li>
          <p>Positive:{positiveFeedback()}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
