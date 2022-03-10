import React from "react";
import styled from "styled-components";
import cardPic_1 from "../assets/images/img3.png";
import cardPic_2 from "../assets/images/img4.png";
import cardPic_3 from "../assets/images/img5.png";
import cardPic_4 from "../assets/images/img6.png";
//import cardPic_5 from "../assets/images/img7.png";
import Card from "./Card";
import CommunityCard from "./CommunityCard";

const SubTitle = styled.div`
  width: 188.9px;
  height: 34px;
  left: 240px;
  top: 624px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height, or 142% */
  letter-spacing: -0.01em;
  color: #000000;
  margin-bottom: 9px;
`;

const CardHorder = styled.div`
  display: flex;
`;

interface cardProps {
  title?: string;
  community?: string;
}

const Section = (props: cardProps) => {
  return (
    <div style={{ marginBottom: "48px" }}>
      <SubTitle style={{}}>{props.title}</SubTitle>
      <CardHorder>
        {!props.community ? (
          <>
            <Card pictureNumber={cardPic_1} />
            <Card pictureNumber={cardPic_2} />
            <Card pictureNumber={cardPic_3} />
            <Card pictureNumber={cardPic_4} />
          </>
        ) : (
          <>
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
            <CommunityCard />
          </>
        )}
      </CardHorder>
    </div>
  );
};

export default Section;
