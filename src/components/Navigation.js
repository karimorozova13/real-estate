import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  @media only screen and (max-width: 991px) {
    padding: 30px 15px;
  }
`;
const NavList = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 20px;
`;
const NavLink = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #262d36;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  a {
    color: #262d36;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  :hover a {
    color: #b68157;
  }
`;
const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #262d36;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  span {
    border: solid #262d36;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform 500ms ease-in-out;
    margin-left: 8px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
  :hover {
    color: #b68157;
  }
  :hover span {
    border-color: #b68157;
  }
`;
const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  min-width: 240px;
  padding-top: 30px;
  background-color: #fff;
`;
const SubItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  a {
    color: #262d36;
    text-decoration: none;
    font-size: 14px;
  }
  :hover a {
    color: #b68157;
  }
  :hover {
    border-color: #f7f7f7;
    background-color: #f7f7f7;
  }
`;
const Navigation = () => {
  const [isSubMenu, setIsSubMenu] = useState(false);
  const subList = ["Refinancing", "Credit Service", "Optimize Deals"];

  return (
    <Nav>
      <Logo />
      <NavList>
        <NavLink>
          <Link href={"/home"}>{"Home"}</Link>
        </NavLink>
        <NavLink>
          <Link href={"/about"}>{"About us"}</Link>
        </NavLink>
        <NavItem
          isSubMenu={isSubMenu}
          onMouseEnter={() => setIsSubMenu(true)}
          onMouseLeave={() => setIsSubMenu(false)}
          onClick={() => {
            console.log(isSubMenu);
            setIsSubMenu(!isSubMenu);
          }}
        >
          <p>{"Services"}</p>
          <span />
          {isSubMenu && (
            <SubMenu>
              <SubItem>
                <Link href={"/services"}>{"Buying a Home"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Refinancing"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Credit Service"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Optimize Deals"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Business Studies"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Market Research"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Business Growth"}</Link>
              </SubItem>
              <SubItem>
                <Link href={"/services"}>{"Stimulate Innovation"}</Link>
              </SubItem>
            </SubMenu>
          )}
        </NavItem>

        <NavLink>
          <Link href={"/news"}>{"News"}</Link>
        </NavLink>
        <NavLink>
          <Link href={"/contact"}>{"Contact"}</Link>
        </NavLink>
      </NavList>
    </Nav>
  );
};

export default Navigation;
