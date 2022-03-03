import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import Card from "../components/Card";

const Community = () => {
  return (
    <>
      <HomeButton></HomeButton>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
          fontSize: "50px",
        }}
      >
        {" "}
        커뮤니티 창 입니다~~{" "}
      </div>
    </>
  );
};

export default Community;
