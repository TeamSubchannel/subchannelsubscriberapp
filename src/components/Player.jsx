import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Title from "./Title";

const Div = styled.div`
  grid-area: p;
  background-color: #777777;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  height: 100%;
`;

class Player extends Component {
  render() {
    return (
      <Div>
        <Header />
        <Title />
      </Div>
    );
  }
}

export default Player;
