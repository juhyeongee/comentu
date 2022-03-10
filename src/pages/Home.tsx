import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Card from "../components/Card";
import CommunityCard from "../components/CommunityCard";
import Footer from "../components/Footer";
import { findByLabelText } from "@testing-library/react";
import HomeHeader from "../components/Header";
import Section from "../components/Section";
import bannerstyles from "src/styles/BannerFontStyle.module.css";

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 20vh;
  padding-right: 20vh;
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
    <HomeHeader />
    <MainContainer>
      <Bottom>
        <Section title="인기 부트 캠프"></Section>
        <Section title="특별 할인 캠프"></Section>
        <Banner>
          <text style={bannerstyles.bannerFontStyle}>
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
