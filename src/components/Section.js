import styled from "styled-components";

const SectionWrap = styled.div`
  padding: 60 px 0;
`;

const Section = () => {
  return <SectionWrap>{children}</SectionWrap>;
};

export default Section;
