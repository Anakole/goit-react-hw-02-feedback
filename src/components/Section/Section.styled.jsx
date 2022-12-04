import styled from '@emotion/styled';

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 500px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  color: #3d3d3d;
`;
