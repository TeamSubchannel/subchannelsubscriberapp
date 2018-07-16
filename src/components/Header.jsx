import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    background: opacity: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ccc;
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <h2 style={{ color: "#fff", margin: "0.25em 0" }}>Logo</h2>
        <Circle />
      </Div>
    );
  }
}

export default Header;
