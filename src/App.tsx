import React from "react";
import styled from "styled-components";
import backPic from "./images/img2.png";
import cardPic from "./images/target.jpeg";
//import style from "../src/style.css";

function App() {
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

  const Card = styled.div`
    height: 300px;
    width: 180px;
    border: 3px solid grey;
    background-image: url("./images/target.jpeg");
    border-radius: 10px;
    margin-left: 30px;
  `;

  const CardHorder = styled.div`
    display: flex;
  `;
  return (
    <>
      <Top>
        <TopInner>
          <TopTitle>개발은 코멘투와 함께</TopTitle>
          <TopPhoto src={backPic} />
        </TopInner>
      </Top>
      <Bottom>
        <MidTitle>인기 부트 캠프</MidTitle>
        <CardHorder>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardHorder>

        <MidTitle>특별 할인 캠프</MidTitle>
        <CardHorder>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </CardHorder>
      </Bottom>

      <div> banner </div>
    </>
  );
}

export default App;
