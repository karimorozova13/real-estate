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
  a {
    color: #262d36;
    text-decoration: none;
  }
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
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: #262d36;
    text-decoration: none;
    font-size: 14px;
    padding: 20px;
    border-bottom: 1px solid #ccc;
  }
`;
const Navigation = () => {
  const [isSubMenu, setIsSubMenu] = useState(false);

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
        <NavLink
          isSubMenu={isSubMenu}
          onClick={() => {
            console.log(isSubMenu);
            setIsSubMenu(!isSubMenu);
          }}
        >
          <p>{"Services"}</p>
          <span />
          {isSubMenu && (
            <SubMenu>
              <Link href={"/services"}>{"Buying a Home"}</Link>
              <Link href={"/services"}>{"Refinancing"}</Link>
              <Link href={"/services"}>{"Credit Service"}</Link>
              <Link href={"/services"}>{"Optimize Deals"}</Link>
              <Link href={"/services"}>{"Business Studies"}</Link>
              <Link href={"/services"}>{"Market Research"}</Link>
              <Link href={"/services"}>{"Business Growth"}</Link>
              <Link href={"/services"}>{"Stimulate Innovation"}</Link>
            </SubMenu>
          )}
        </NavLink>

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
