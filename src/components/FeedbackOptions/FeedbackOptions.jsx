import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButtons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      {options.map(element => (
        <FeedbackButtons
          key={element}
          type="button"
          onClick={onLeaveFeedback}
          value={element}
        >
          {element}
        </FeedbackButtons>
      ))}
    </FeedbackContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
