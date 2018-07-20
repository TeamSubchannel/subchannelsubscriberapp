import React from "react";
import styled from "styled-components";
import { Row, Column, Text } from "../theme/index";

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  border-bottom: 6px solid #fff;
  margin: 0 0 0 5em;
  right: 1.3em;
  top: 3.4em;
  position: absolute;
  z-index: 5;
`;

const Menu = styled.div`
  background: #fff;
  border-radius: 3px;
  width: 125px;
  min-height: 100px;
  position: absolute;
  right: 1em;
  top: 3.7em;
  display: flex;
  flex-direction: column;
  z-index: 2;
  box-shadow: 0 2px 8px 0 rgba(34, 34, 34, 0.5);
`;

const StyledRow = styled(Row)`
  cursor: pointer;
  padding: 0.3em 0;
  &:hover {
    background-color: #f7f7f7;
  }
`;

export default function DropdownModal({
  display = false,
  options = [{}],
  userdetails,
  initials,
  notifications,
  type
}) {
  return (
    <div
      style={{
        display: display ? "block" : "none"
      }}
    >
      <Arrow />
      <Menu>
        <Column padding=".5em 0">
          {options.map((value, key) => {
            return (
              <StyledRow
                key={key}
                onClick={() => value.onClick && value.onClick(value)}
              >
                <Text margin="0 0 0 1.5em" padding="1em 0" color={value.color}>
                  {value.label}
                </Text>
              </StyledRow>
            );
          })}
        </Column>
      </Menu>
    </div>
  );
}
