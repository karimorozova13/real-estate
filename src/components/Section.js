import styled from "styled-components";

const SectionWrap = styled.div`
  padding: 60px 0;
  background-color: ${({ bgColor }) => bgColor};
`;

const Section = ({ children, bgColor = "#fff" }) => {
  return <SectionWrap bgColor={bgColor}>{children}</SectionWrap>;
};

export default Section;
