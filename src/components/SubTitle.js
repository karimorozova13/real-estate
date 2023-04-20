import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: ${({ color }) => color};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3.22px;
  text-align: center;
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const SubTitle = ({ title, color = "#fff", mb = 0 }) => {
  return (
    <Text mb={mb} color={color}>
      {title}
    </Text>
  );
};

export default SubTitle;
