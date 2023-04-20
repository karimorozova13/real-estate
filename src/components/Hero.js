import { HeroBg } from "@/config/images";
import React from "react";
import styled from "styled-components";
import Container from "./Container";

const HeroSection = styled.div`
  padding: 100px 20px;
  width: 100%;
  background-image: url(${HeroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const SubTitle = styled.p`
  padding: 7px;
  color: #fff;
  background-color: #f5f7f833;
  width: fit-content;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2em;
  letter-spacing: 0px;
  margin-bottom: 30px;
`;
const Line = styled.span`
  height: 1px;
  width: 100px;
  background-color: #fff;
  display: block;
  margin-bottom: 30px;
`;
const Des = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: calc(24 / 16);
  max-width: 50%;
  margin-bottom: 30px;
  @media only screen and (max-width: 575px) {
    max-width: 100%;
  }
`;
const Btn = styled.button`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9d683e;
  border-radius: 5px;
  border: none;
  outline: none;
  width: 200px;
  min-width: 200px;
  min-height: 50px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  :hover,
  :focus {
    background-color: #7a5130;
  }
`;
const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <SubTitle>{"SERVICES OVERVIEW"}</SubTitle>
        <Title>{"We See Things That Others Miss"}</Title>
        <Line />
        <Des>
          {
            "Today’s winning organizations need a combination of strategic insight, domain expertise, data, and technology. That is why our complements its traditional consulting excellence with solutions: technologies and specialized teams that deliver results."
          }
        </Des>
        <Btn>{"Learn more "}</Btn>
      </Container>
    </HeroSection>
  );
};

export default Hero;
