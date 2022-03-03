import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

const PayButton = () => (
  <Link to="/Pay" style={{ textDecoration: "none" }}>
    <div
      style={{
        width: "200px",
        backgroundColor: "black",
        color: "white",
        fontSize: "50px",
      }}
    >
      Pay
    </div>
  </Link>
);

export default PayButton;
