import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = (props: any) => {
  const MainText = styled.div`
    top: 140px;
    position: relative;
    color: white;
    line-height: 20px;
    font-weight: 500;
  `;

  const StateText = styled.div`
    font-size: 15px;
    top: 120px;
    position: relative;
    color: white;
    font-weight: 300;
  `;

  const DateText = styled.div`
    font-size: 13px;
    top: 155px;
    position: relative;
    color: white;
    font-weight: 300;
  `;
  return (
    <Link
      to="./ClassDetail"
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          height: "280px",
          width: "224px",
          borderRadius: "10px",
          marginRight: "21.5px",
          background: `url(${props.pictureNumber})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          //<img style={{height: "100%",width: "100%",objectFit: "cover",borderRadius: "10px",}}src={props.pictureNumber} ></img>
          //left: 0px;
          //top: 0px;
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1))",
            width: "100%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            borderRadius: "10px",
          }}
        >
          <StateText> 모집 중</StateText>
          <MainText> 쉽지만 강력한 엑셀로 데이터 분석과 자동화까지 </MainText>
          {/*(<Text>직접 해보는 페이스북 마케팅 실무 </Text>  <Text> React 실무 프로젝트로 역량 업그레이드 </Text>*/}
          <DateText> 2월 21일부터 </DateText>
        </div>
      </div>
    </Link>
  );
};

export default Card;
