import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: black;
`;

const CommunityCardTopTag = styled.div`
  boxsizing: border-box;
  padding: 4px;
  background: #7471ff;
  border-radius: 4px;
  width: 67px;
  height: 22px;
`;

const CommunityCardTag2 = styled.div`
  boxsizing: border-box;
  padding: 4px;
  background: #eeeeee;
  border-radius: 4px;
  width: 56px;
  height: 22px;
`;

const CommunityCardTagText = styled.text`
  //styleName: Caption/Bold;
  font-family: Noto Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.01em;
  text-align: left;
  color: white;
`;

const CommunityCard = (props: any) => (
  <Link
    to="./Community"
    style={{ color: "inherit", textDecoration: "inherit" }}
  >
    <div
      style={{
        boxSizing: "border-box",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "280px",
        width: "224px",
        borderRadius: "10px",
        marginRight: "21.5px",
        border: "1px solid grey",
        //left: 0px;
        //top: 0px;
      }}
    >
      <div style={{ display: "flex" }}>
        <CommunityCardTopTag>
          <CommunityCardTagText>조회수 TOP</CommunityCardTagText>
        </CommunityCardTopTag>
        <CommunityCardTag2>
          <CommunityCardTagText>취업 고민</CommunityCardTagText>
        </CommunityCardTag2>
      </div>
      <text style={{ fontWeight: "bolder", fontSize: "20px" }}>
        합격 메일 답장 어떻게 할까요?
      </text>
      <text>고칠 부분이 있다면 말씀해주시면 감사드립니다.</text>
      <Avatar />
    </div>
  </Link>
);

export default CommunityCard;
