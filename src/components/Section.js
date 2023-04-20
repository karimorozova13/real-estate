import styled from "styled-components";

const SectionWrap = styled.div`
  padding: 60px 0;
`;

const Section = ({ children }) => {
  return <SectionWrap>{children}</SectionWrap>;
};

export default Section;
