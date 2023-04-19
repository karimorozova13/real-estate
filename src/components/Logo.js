import { MainLogo } from "@/config/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const LogoWrap = styled.div`
  width: 182px;
  height: 35px;
`;

const Logo = () => {
  return (
    <LogoWrap>
      <Link href={"/"}>
        <Image width={182} height={35} alt={"Addendum Logo"} src={MainLogo} />
      </Link>
    </LogoWrap>
  );
};

export default Logo;
