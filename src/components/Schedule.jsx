import React, { Component } from "react";
import styled from "styled-components";

const Div = styled.div`
  grid-area: s;
  background-color: #565656;
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em;
  height: 100%;
`;

class Schedule extends Component {
  render() {
    return <Div />;
  }
}

export default Schedule;
