import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`;

export const FeedbackButtons = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  background-color: #3d3d3d;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: #bebebe;
    font-weight: 600;
    color: #3d3d3d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
