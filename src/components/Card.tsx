import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = () => (
  <Link to="./ClassDetail">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        width: "180px",
        border: " 3px solid grey",
        borderRadius: "10px",
        marginLeft: "30px",
      }}
    >
      Go to Details
    </div>
  </Link>
);

export default Card;
