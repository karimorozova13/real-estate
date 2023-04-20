import { data } from "@/config/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";

const SubTitle = styled.p`
  padding: 7px;
  color: #42474c;
  background-color: #f5f7f8;
  width: fit-content;
  margin-bottom: 20px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 5px;
  overflow: hidden;
  width: calc(100% / 4 - 60px / 4);
  cursor: pointer;
  a {
    text-decoration: none;
    color: inherit;
  }
  :hover h3,
  :hover span {
    color: #b68157;
  }
  @media only screen and (max-width: 991px) {
    width: calc(100% / 2 - 20px / 2);
    img {
      height: 180px;
    }
  }
  @media only screen and (max-width: 575px) {
    width: 290px;
  }
`;
const Body = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 767px) {
    gap: 15px;
  }
`;
const ItemTitle = styled.h3`
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  min-height: 42px;
`;
const ReadMore = styled.span`
  color: #42474c;
  font-size: 12px;
`;
const Sub = styled.p`
  @media only screen and (max-width: 767px) {
    min-height: 72px;
  }
  @media only screen and (min-width: 992px) {
    min-height: 90px;
  }
`;

const ServicesSection = () => {
  return (
    <Section>
      <Container>
        <SubTitle>{"MEET THE PROFESSIONALS"}</SubTitle>
        <Title color={"#262D36"} title={"Services List"} />
        <List>
          {data.map(({ title, des, source, href }, idx) => {
            return (
              <Item key={idx}>
                <Link href={href}>
                  <Image src={source} alt={title} width={270} height={152} />
                  <Body>
                    <ItemTitle>{title}</ItemTitle>
                    <Sub>{des}</Sub>
                    <ReadMore>{"READ MORE"}</ReadMore>
                  </Body>
                </Link>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

export default ServicesSection;
