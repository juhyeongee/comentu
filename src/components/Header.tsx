import React from "react";
import styled from "styled-components";
import backPic from "../assets/images/img2.png";
import HomeButton from "../components/HomeButton";

const Header = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 560px;
  width: 100%;
  background: linear-gradient(
    97.88deg,
    #854bff -84.42%,
    #7179ff 15.02%,
    #6d83ff 36.89%,
    #698bff 54.79%,
    #6499ff 80.65%,
    #659bf7 108.49%,
    #669fea 148.27%,
    #69a9cd 197.99%,
    #6cb1b2 239.75%
  );
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
`;

const HeaderPhoto = styled.img``;

const HomeHeader = () => {
  return (
    <Header>
      <HeaderInner>
        <div style={{ position: "relative", top: "90px" }}>
          <HomeButton />
          <HeaderTitle>개발은</HeaderTitle>
          <HeaderTitle>코멘투와 함께</HeaderTitle>
          <div
            style={{
              marginTop: "20px",
              height: "2px",
              width: "250px",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <HeaderPhoto src={backPic} />
      </HeaderInner>
    </Header>
  );
};

export default HomeHeader;
