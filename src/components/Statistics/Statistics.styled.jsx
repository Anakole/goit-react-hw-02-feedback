import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StatisticsItemOption = styled.li`
  display: flex;
  justify-content: center;
  font-weight: 500;
  color: #3d3d3d;
  border: 2px dashed #00000013;
  width: calc(100% / 4);
  padding: 10px;
`;

export const StatisticsItemTotal = styled.li`
  display: flex;
  justify-content: center;
  margin: auto;
  background-color: #3d3d3d;
  color: white;
  padding: 10px;
  width: calc(100% / 2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  letter-spacing: 1px;
  &:last-child {
    margin-bottom: 20px;
  }
`;
