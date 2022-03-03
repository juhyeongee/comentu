import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const HomeButton = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <div
      style={{
        color: "tomato",
        fontSize: "50px",
        position: "absolute",
        top: "40px",
        left: "40px",
      }}
    >
      Comentu
    </div>
  </Link>
);
export default HomeButton;
