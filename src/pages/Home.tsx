import React from "react";
import styled from "styled-components";
import backPic from "../images/img2.png";
import cardPic_1 from "../images/img3.png";
import cardPic_2 from "../images/img4.png";
import cardPic_3 from "../images/img5.png";
import cardPic_4 from "../images/img6.png";
import cardPic_5 from "../images/img7.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import Card from "../components/Card";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import { findByLabelText } from "@testing-library/react";

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

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20vh;
  padding-right: 20vh;
`;
const SubTitle = styled.div`
  width: 188.9px;
  height: 34px;
  left: 240px;
  top: 624px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height, or 142% */
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 9px;
`;

const HeaderPhoto = styled.img``;

const CardHorder = styled.div`
  display: flex;
`;

const Banner = styled.div`
  padding-left: 42px;
  display: flex;
  align-items: center;

  background-color: tomato;
  /* bg */

  width: 960px;
  height: 100px;

  /* Primary1 */

  background: #7471ff;

  margin-top: 8px;
  margin-bottom: 56px;
`;

interface cardProps {
  title?: string;
  community?: string;
}

const Section = (props: cardProps) => {
  return (
    <div style={{ marginBottom: "48px" }}>
      <SubTitle style={{}}>{props.title}</SubTitle>
      <CardHorder>
        {!props.community ? (
          <>
            <Card pictureNumber={cardPic_1} />
            <Card pictureNumber={cardPic_2} />
            <Card pictureNumber={cardPic_3} />
            <Card pictureNumber={cardPic_4} />
          </>
        ) : (
          <>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </>
        )}
      </CardHorder>
    </div>
  );
};

const MainContainer = styled.div`
  margin-top: 107px;
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 560px;
`;

const Home = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
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
    <MainContainer>
      <Bottom>
        <Section title="인기 부트 캠프"></Section>
        <Section title="특별 할인 캠프"></Section>
        <Banner>
          <text
            style={{
              color: "#ffffff",
              fontFamily: "Noto Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "34px",
              letterSpacing: "-0.01em",
              textAlign: "left",
            }}
          >
            현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝
          </text>
        </Banner>
        <Section title="커뮤니티" community="1"></Section>
        <Footer></Footer>
      </Bottom>
    </MainContainer>
  </div>
);

export default Home;
