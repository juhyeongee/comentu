import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PayButton from "../components/PayButton";
import HomeButton from "../components/HomeButton";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  margin-top: 150px;
  justify-content: center;
`;

const InfoInput = () => {
  return (
    <form>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <span>이름</span>
        <input></input>
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <span>전화번호</span>
        <input></input>
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <span>이메일</span>
        <input></input>
      </div>
      <button style={{ marginTop: "30px" }}> SUBMIT</button>
    </form>
  );
};

const Pay = () => {
  return (
    <>
      <HomeButton />
      <Container>
        <InfoInput></InfoInput>
      </Container>
    </>
  );
};

export default Pay;
