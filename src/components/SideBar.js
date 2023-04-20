import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  right: 0;
`;
const Menu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  background-color: #b68157;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const NavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  a {
    color: #fff;
    text-decoration: none;
  }
  span {
    border: solid #fff;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: transform 500ms ease-in-out;
    transform: ${({ isSubMenu }) =>
      isSubMenu ? "rotate(-135deg)" : "rotate(-45deg)"};
    -webkit-transform: ${({ isSubMenu }) =>
      isSubMenu ? "rotate(-135deg)" : "rotate(-45deg)"};
  }
`;

const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 15px;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
`;

const SideBar = ({ closeBar }) => {
  const [isSubMenu, setIsSubMenu] = useState(false);
  const closeSideBar = (e) => {
    if (e.key === "Escape") {
      closeBar();
    }
  };
  const closeOnClickOutside = (e) => {
    if (e.target === e.currentTarget) closeBar();
  };
  useEffect(() => {
    document.addEventListener("keydown", closeSideBar);
    return () => {
      document.removeEventListener("keydown", closeSideBar);
    };
  }, []);

  return (
    <BackDrop onClick={closeOnClickOutside}>
      <Menu>
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
        </NavLink>
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
        <NavLink>
          <Link href={"/news"}>{"News"}</Link>
        </NavLink>
        <NavLink>
          <Link href={"/contact"}>{"Contact"}</Link>
        </NavLink>
      </Menu>
    </BackDrop>
  );
};

export default SideBar;
