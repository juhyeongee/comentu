import React from "react";
import styled from "styled-components";
import backPic from "../images/img2.png";
import cardPic from "../images/target.jpeg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import Card from "../components/Card";

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  background-color: wheat;
`;

const TopInner = styled.div`
  display: flex;
  align-items: center;
`;

const TopTitle = styled.div`
  font-size: 4vh;
`;

const Bottom = styled.div`
  padding-left: 20vh;
  padding-right: 20vh;
`;
const MidTitle = styled.div`
  font-size: 4vh;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TopPhoto = styled.img``;

const CardHorder = styled.div`
  display: flex;
`;

const Banner = styled.div`
  margin-top: 50px;
  width: 90%;
  height: 100px;
  background-color: tomato;
`;

const Home = () => (
  <>
    <HomeButton />
    <Top>
      <TopInner>
        <TopTitle>개발은 코멘투와 함께</TopTitle>
        <TopPhoto src={backPic} />
      </TopInner>
    </Top>
    <Bottom>
      <MidTitle>인기 부트 캠프</MidTitle>
      <CardHorder>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardHorder>
      <MidTitle>특별 할인 캠프</MidTitle>
      <CardHorder>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardHorder>
      <Banner></Banner>
      <MidTitle> 커뮤니티 </MidTitle>
      <CardHorder>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardHorder>
    </Bottom>
  </>
);

export default Home;
