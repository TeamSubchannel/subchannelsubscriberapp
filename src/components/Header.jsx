import React, { Component } from "react";
import styled from "styled-components";
import { Title2 } from "../theme/index";

const Div = styled.div.attrs({
  background: props => props.background
})`
  width: 100%;
  background: ${props => props.background || "rgba(0, 0, 0, 0)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 0.5em;
`;

const StyledTitle2 = styled(Title2)`
  margin-left: 0.5em;
`;

class Header extends Component {
  render() {
    return (
      <Div background={this.props.background}>
        <StyledTitle2>Logo</StyledTitle2>
        <Circle />
      </Div>
    );
  }
}

export default Header;
