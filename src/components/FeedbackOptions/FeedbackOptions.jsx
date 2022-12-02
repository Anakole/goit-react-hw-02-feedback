export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(element => (
        <button
          key={element}
          type="button"
          onClick={onLeaveFeedback}
          value={element}
        >
          {element}
        </button>
      ))}
    </div>
  );
};
