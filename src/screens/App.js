import React, { Component } from "react";
import styled from "styled-components";
import Player from "../components/Player";
import Schedule from "../components/Schedule";

export const Wrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 65px 1fr 1fr 1fr 1fr 225px;
  grid-template-areas:
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "p p p p p p"
    "s s s s s s";
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Player />
        <Schedule />
      </Wrapper>
    );
  }
}

export default App;
