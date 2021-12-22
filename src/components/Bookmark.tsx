import React from "react";
import styled from "styled-components";

function Bookmark() {
  return <Container>네이버</Container>;
}

export default Bookmark;

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
