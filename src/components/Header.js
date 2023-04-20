import styled from "styled-components";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { useState } from "react";
import SideBar from "./SideBar";
import { useWindowSize } from "usehooks-ts";

const HeaderWrap = styled.div`
  padding: 15px 30px;
  background-color: #42474c;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    padding: 30px 15px;
    gap: 30px;
  }
`;
const Contacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #919191;
    transition: color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  :hover,
  :focus {
    a {
      color: #b68157;
    }
  }
`;
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  :hover,
  :focus {
    background-color: #b68157;
  }
`;
const AuthList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
    color: #919191;
    position: relative;
    transition: color 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    :hover,
    :focus {
      color: #b68157;
    }
    :first-child {
      padding-right: 10px;
    }
    :first-child::after {
      content: "";
      height: 100%;
      width: 1px;
      background-color: #919191;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b68157;
  border-radius: 3px;
  width: 35px;
  height: 35px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 2;
  span {
    width: 80%;
    height: 4px;
    background-color: ${({ isMenu }) => (!isMenu ? "transparent" : "#fff")};
    border-radius: 12px;
    display: block;
    transition: background-color 0.5s ease-in-out;
    cursor: pointer;
    ::before,
    ::after {
      content: "";
      width: 100%;
      background-color: #fff;
      display: block;
      transition: all 0.5s ease-in-out;
      border-radius: 12px;
      height: 4px;
    }
    ::before {
      transform: ${({ isMenu }) =>
        !isMenu ? "rotateZ(45deg) translateY(0)" : "translateY(-10px)"};
    }
    ::after {
      transform: ${({ isMenu }) =>
        !isMenu ? "rotateZ(-45deg) translateY(0)" : "translateY(10px)"};
      margin-top: -4px;
    }
  }
`;
const LinksWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 991px) {
    width: 100%;
    gap: 10px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const { width } = useWindowSize();
  return (
    <HeaderWrap>
      {width < 768 && (
        <Burger isMenu={!isMenu} onClick={() => setIsMenu(!isMenu)}>
          <span />
        </Burger>
      )}

      <Contacts>
        <Icon>
          <RiPhoneFill color={"#919191"} size={23} />
          <a href={`tel:+35799797975`}>{"+35799797975"}</a>
        </Icon>
        <Icon>
          <FaEnvelope color={"#919191"} size={23} />
          <a href={`mailto:+35799797975`}>{"k.morozova@tiomarkets.com"}</a>
        </Icon>
        <Icon>
          <MdLocationOn color={"#919191"} size={23} />
          <a
            target={"_blank"}
            href={
              "https://www.google.com/maps/place/Athinon+82,+Limassol,+Cyprus/@34.6769772,33.0439235,17z/data=!3m1!4b1!4m5!3m4!1s0x14e7331b3d3a2a65:0xc25a136f7f677113!8m2!3d34.6769728!4d33.0464984"
            }
          >
            {"3040, 82 Athinon, Limassol, Cyprus"}
          </a>
        </Icon>
      </Contacts>
      <LinksWrap>
        <AuthList>
          <Link href={"/login"}>{"Login"} </Link>
          <Link href={"/register"}>{"Register"} </Link>
        </AuthList>
        <SocialIcons>
          <SocialIcon
            href="https://www.facebook.com/karinka.ziebielian/"
            target={"_blank"}
          >
            <FaFacebookF color={"#919191"} size={23} />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/karine-morozova-3012b5229/"
            target={"_blank"}
          >
            <FaLinkedinIn color={"#919191"} size={23} />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/" target={"_blank"}>
            <FaTwitter color={"#919191"} size={23} />
          </SocialIcon>
          <SocialIcon
            href="https://www.instagram.com/kari_ziebielian/"
            target={"_blank"}
          >
            <FaInstagram color={"#919191"} size={23} />
          </SocialIcon>
        </SocialIcons>
      </LinksWrap>

      {isMenu && <SideBar closeBar={() => setIsMenu(false)} />}
    </HeaderWrap>
  );
};

export default Header;
