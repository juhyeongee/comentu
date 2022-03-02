import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Link } from "react-router-dom";

const HomeButton = styled.div`
  font-color: teal;
  font-size: 50px;
`;

const ClassDetails = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <HomeButton>pages</HomeButton>
    </Link>
  );
};

export default ClassDetails;
