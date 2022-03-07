import React from "react";
import { Link } from "react-router-dom";

interface buttonProps {
  style: string;
  community?: string;
}

const PayButton = (props: buttonProps) => (
  <div>
    <Link to="/Pay">
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
  </div>
);

export default PayButton;
