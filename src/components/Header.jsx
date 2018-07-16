import React, { Component } from "react";
import styled from "styled-components";
import { Title2 } from "../theme/index";

const Div = styled.div`
    width: 100%;
    background: opacity: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <Title2>Logo</Title2>
        <Circle />
      </Div>
    );
  }
}

export default Header;
