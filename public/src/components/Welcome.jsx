import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/hello.webp";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <TopRight>
        <Logout/>
      </TopRight>
      <img src={Robot} alt="" />
      <h1>
        Hello, <span>{userName}!</span> Ji
      </h1>
      <h3>Let your thoughts travel the world with Hello Ji: Where every line becomes a journey of friendship.😍😍 </h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 13rem;
    margin-bottom: 4rem;
  }
  span {
    color: #B0D7FF;
  }
  .logout-btn {
    display: flex;
      margin-left: 0rem;
   }
`;

const TopRight = styled.div`
  position: absolute;
  top: 4em;
  right: 7.5em;
`;