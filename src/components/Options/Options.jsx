import s from "./Options.module.css";

const Options = ({ handleFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <ul className={s.wrapper}>
        <li className={s.optionItem}>
          <button onClick={() => handleFeedback("good")}>Good</button>
        </li>
        <li className={s.optionItem}>
          <button onClick={() => handleFeedback("neutral")}>Neutral</button>
        </li>
        <li className={s.optionItem}>
          <button onClick={() => handleFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li className={s.optionItem}>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
