import styled from "styled-components";

const TitleWrap = styled.h2`
  font-size: 36px;
  line-height: 1.2em;
  letter-spacing: 0px;
  color: ${({ color }) => color};
  text-align: ${({ textAl }) => textAl};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Title = ({ color, title, textAl = "left", mb = 0 }) => {
  return (
    <TitleWrap mb={mb} textAl={textAl} color={color}>
      {title}
    </TitleWrap>
  );
};

export default Title;
