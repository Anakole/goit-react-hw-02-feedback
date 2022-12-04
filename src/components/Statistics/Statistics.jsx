import {
  StatisticsList,
  StatisticsItemOption,
  StatisticsItemTotal,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatisticsList>
      <StatisticsItemOption>Good: {good}</StatisticsItemOption>
      <StatisticsItemOption>Neutral: {neutral}</StatisticsItemOption>
      <StatisticsItemOption>Bad: {bad}</StatisticsItemOption>
      <StatisticsItemTotal>Total: {total}</StatisticsItemTotal>
      <StatisticsItemTotal>
        Positive feedback: {positiveFeedback || 0}%
      </StatisticsItemTotal>
    </StatisticsList>
  );
};
