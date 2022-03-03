import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import PayButton from "../components/PayButton";

const BackLabel = styled.div`
  width: 100%;
  height: 400px;
  background-color: teal;
`;

const ClassDetailInfo = styled.div`
  width: 500px;
  height: 200px;
  background-color: gray;
`;

const ClassDetails = () => {
  return (
    <>
      <HomeButton></HomeButton>
      <BackLabel></BackLabel>
      <ClassDetailInfo> 대답없는 VOD에 라이브로 답하다 </ClassDetailInfo>
      <PayButton></PayButton>
    </>
  );
};

export default ClassDetails;
