import { SectionStyled, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyled>
  );
};
