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
  cursor: pointer;
  transition: all 1.1s;
  -webkit-transition all 1.1s;
`;

const Layer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 1.1s;
  -webkit-transition all 1.1s;
  &:hover {
    background: rgba(0, 0, 0, 0);
  }
`;

class Player extends Component {
  render() {
    return (
      <Div background={`url('${this.props.live.thumbnail}')`}>
        <Layer>
          <Header />
          <Title title={this.props.live.name} />
        </Layer>
      </Div>
    );
  }
}

export default Player;
