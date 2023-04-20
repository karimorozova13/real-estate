import styled from "styled-components";

const TitleWrap = styled.h2`
  font-size: 36px;
  line-height: 1.2em;
  letter-spacing: 0px;
`;

const Title = ({ color, title }) => {
  return <TitleWrap color={color}>{title}</TitleWrap>;
};

export default Title;
