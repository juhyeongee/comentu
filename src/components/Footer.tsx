import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #eeeeee;
  position: absolute;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 1500px;
`;

const Text = styled.div`
  position: absolute;
  left: 16.6%;
  right: 16.74%;
  top: 20%;
  bottom: 40%;
`;

const SNSList = styled.div`
  height: 32px;
  width: 29.510086059570312px;
  border-radius: 0px;
  background-color: #cccccc;
  border-radius: 16px;
`;
// ㅇㅣ거 맞ㅏ아? 아니 언제 콘테이너를 쓰고 안쓰고를
const SNSContainer = styled.div`
  display: flex;
  position: absolute;
  left: 76.35%;
  right: 21.6%;
  top: 20%;
  bottom: 60%;
  height: 32px;
  width: 99.59654235839844px;
  left: 1099.4034423828125px;
  top: 32px;
  border-radius: 0px;
`;

const Footer = () => (
  <Container>
    <Text>
      <div>
        대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
      </div>
      <div> </div>
      <div>
        Copyright by (주)카페인. All right reserved. 이용약관 개인정보처리방침
      </div>
    </Text>
    <SNSContainer>
      <SNSList></SNSList>
      <SNSList></SNSList>
      <SNSList></SNSList>
    </SNSContainer>
  </Container>
);

export default Footer;
