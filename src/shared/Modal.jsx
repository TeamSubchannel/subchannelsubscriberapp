import React, { Component } from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 50px;
  z-index: 1000000;
`;

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  width: 385px;
  height: 370px;
  margin: 5em auto;
  z-index: 10000000;
`;

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Backdrop>
        <StyledModal>{this.props.children}</StyledModal>
      </Backdrop>
    );
  }
}
