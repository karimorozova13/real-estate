import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Sub = styled.p`
  color: #fff;
  margin-top: 10px;
  @media only screen and (max-width: 991px) {
    max-width: 450px;
  }
`;
const Btn = styled.button`
  color: #444c5c;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 200px;
  min-width: 200px;
  min-height: 50px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  :hover,
  :focus {
    background-color: #b68157;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const PowerSection = () => {
  return (
    <Section bgColor={"#b68157"}>
      <Container>
        <Body>
          <div>
            <Title
              color={"#fff"}
              title={"Unleash Your Team’s Productive Power"}
            />
            <Sub>
              {
                "The truly scarce resources now are the time, the talent, and the energy of the people in your organization"
              }
            </Sub>
          </div>
          <Btn>{"get in touch"}</Btn>
        </Body>
      </Container>
    </Section>
  );
};

export default PowerSection;
