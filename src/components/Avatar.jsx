import React, { Component } from "react";
import styled from "styled-components";
import { Text } from "../theme/index";

const Circle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background};
  margin-right: 0.5em;
  border-radius: 50%;
  opacity: 0.75;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledText = styled(Text)`
  font-size: 0.9em;
  color: #fff;
`;

class Avatar extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = { displayDropdown: false };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleClick = () => {
    this.setState({ displayDropdown: !this.state.displayDropdown });
    this._isMounted = true;
    this.avatarImg.focus();
  };

  handleBlur = () => {
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({
          displayDropdown: false
        });
      }
    }, 400);
  };

  render() {
    return (
      <div>
        <Circle
          onClick={this.handleClick}
          innerRef={el => (this.avatarImg = el)}
          tabIndex="-1"
          onBlur={this.handleBlur}
          background={this.props.background}
        >
          <StyledText>{this.props.initials}</StyledText>
        </Circle>

        {this.props.render(this.state.displayDropdown)}
      </div>
    );
  }
}

export default Avatar;
