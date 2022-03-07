import React from "react";
import { Link } from "react-router-dom";

const Card = (props: any) => (
  <Link to="./ClassDetail">
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "280px",
        width: "224px",
        borderRadius: "10px",
        marginRight: "21.5px",
        //left: 0px;
        //top: 0px;
      }}
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: "10px",
        }}
        src={props.pictureNumber}
      ></img>
    </div>
  </Link>
);

export default Card;
