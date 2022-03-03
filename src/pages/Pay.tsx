import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PayButton from "../components/PayButton";
import HomeButton from "../components/HomeButton";

const NameInput = () => {
  return (
    <form>
      <span>이름</span>
      <input></input>
      <span>전화번호</span>
      <input></input>
      <span>이메일</span>
      <input></input>
      <button> SUBMIT</button>
    </form>
  );
};

const Pay = () => {
  return (
    <>
      <HomeButton />
      <NameInput></NameInput>
    </>
  );
};

export default Pay;
