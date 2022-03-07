import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <div
      style={{
        color: "white",
        fontSize: "25px",
        position: "relative",
        top: "-230px",
        fontWeight: "bolder",
      }}
    >
      Comentu
    </div>
  </Link>
);
export default HomeButton;
