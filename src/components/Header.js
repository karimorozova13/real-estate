import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
const Wrap = styled.div`
  padding: 30px;
  background-color: #abb8c3;
  display: flex;
`;
const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;
const Header = () => {
  return (
    <Wrap>
      <Contacts>
        <RiPhoneFill color={"#919191"} size={23} />
        <FaEnvelope color={"#919191"} size={23} />
        <MdLocationOn color={"#919191"} size={23} />
      </Contacts>
      <SocialIcons>
        <FaFacebookF color={"#919191"} size={23} />
        <FaLinkedinIn color={"#919191"} size={23} />
        <FaTwitter color={"#919191"} size={23} />
        <FaInstagram color={"#919191"} size={23} />
      </SocialIcons>
    </Wrap>
  );
};

export default Header;
