import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Title from "./Title";

const Div = styled.div`
  grid-area: p;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${props => props.background || "#777"};
  background-position: center;
  background-size: cover;
  opacity: 0.7;
  cursor: pointer;
  transition: all 1.1s;
  filter: grayscale(.40);
  -webkit-transition all 1.1s;
  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

class Player extends Component {
  render() {
    return (
      <Div background={`url('${this.props.live.thumbnail}')`}>
        <Header />
        <Title title={this.props.live.name} />
      </Div>
    );
  }
}

export default Player;
