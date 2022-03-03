import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OneCard = styled.div`
  height: 300px;
  width: 180px;
  border: 3px solid grey;
  background-image: url("./images/target.jpeg");
  border-radius: 10px;
  margin-left: 30px;
`;

const Card = () => (
  <Link to="./ClassDetail">
    <div
      style={{
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
