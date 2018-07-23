import React from "react";
import styled from "styled-components";
import { Text } from "../theme/index";

const Div = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.background || "#ccc"};
  background-position: center;
  background-size: cover;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  opacity: 0.7;
  transition: all 1.1s;
  -webkit-transition all 1.1s;
  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const StyledText = styled(Text)`
  color: #fff;
  font-size: 0.9em;
  text-transform: uppercase;
  position: absolute;
  bottom: 0;
  left: 0.25em;
`;

export default function Video({ background, name }) {
  return (
    <Div background={background}>
      <StyledText>{name}</StyledText>
    </Div>
  );
}
