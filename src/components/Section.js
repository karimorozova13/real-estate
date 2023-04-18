import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 60 px 0;
`;

const Section = () => {
  return <Wrap>{children}</Wrap>;
};

export default Section;
