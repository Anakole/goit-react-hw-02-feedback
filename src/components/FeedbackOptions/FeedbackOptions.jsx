export const FeedbackOptions = ({ options, onElementClick }) => {
  return (
    <div>
      {options.map(element => (
        <button
          key={element}
          type="button"
          onClick={onElementClick}
          value={element}
        >
          {element}
        </button>
      ))}
    </div>
  );
};
