import { data } from "@/config/features";
import { HeroBg } from "@/config/images";
import React from "react";
import styled from "styled-components";
import Container from "./Container";
import SubTitle from "./SubTitle";
import Title from "./Title";

const MainSection = styled.div`
  padding: 100px 20px;
  width: 100%;
  background-image: url(${HeroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 575px;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  width: calc(100% / 3 - 60px / 3);
  padding: 30px;
  gap: 20px;
  @media only screen and (max-width: 991px) {
    width: 370px;
  }
`;

const Sub = styled.p`
  color: #42474c;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 3.22px;
`;
const ItemTitle = styled.h3`
  color: #262d36;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: 0px;
`;
const Des = styled.p`
  color: #42474c;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  letter-spacing: 0px;
`;
const Line = styled.span`
  width: 65px;
  height: 1px;
  background-color: #c6c7c9;
`;

const FeaturesSection = () => {
  return (
    <MainSection>
      <Container>
        <SubTitle title={"WE ENJOY WORKING"} mb={20} />
        <Title
          title={"Why People Choose Us"}
          color={"#fff"}
          textAl={"center"}
        />
        <List>
          {data.map(({ sub, des, title }, idx) => {
            return (
              <Item key={idx}>
                <Sub>{sub}</Sub>
                <ItemTitle>{title}</ItemTitle>
                <Line />
                <Des>{des}</Des>
              </Item>
            );
          })}
        </List>
      </Container>
    </MainSection>
  );
};

export default FeaturesSection;
