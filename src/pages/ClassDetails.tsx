import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import PayButton from "../components/PayButton";

const BackLabel = styled.div`
  width: 100%;
  height: 400px;
  background-color: wheat;
`;

const ClassDetailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  width: 600px;
  height: 300px;
  background-color: gray;
`;

const ClassDetails = () => {
  return (
    <>
      <HomeButton></HomeButton>
      <BackLabel></BackLabel>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ClassDetailInfo
          style={{
            display: "flex",
            position: "relative",
            top: "-100px",
          }}
        >
          대답없는 VOD에 라이브로 답하다
        </ClassDetailInfo>
        <PayButton //이거 이렇게 텍스트로 전달하는걱 맞아..?
          style='
            backgroundColor: "teal",
            border: "1px solid black",
            display: "flex",
            height: "300px",
            width: "180px",
            alignItems: "center",
            justifyContent: "center",
          '
        ></PayButton>
      </div>
    </>
  );
};

export default ClassDetails;
