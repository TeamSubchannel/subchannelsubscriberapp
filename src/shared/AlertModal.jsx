import React, { Component } from "react";
import styled from "styled-components";
import { Row, Button, Text } from "../theme/index";

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
  width: 450px;
  height: 240px;
  margin: 5em auto;
  z-index: 10000000;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 100000000;
  width: 100%;
  height: 100%;
`;

const StyledDelete = styled(Button)`
  margin: 0 0.2em;
  background-color: #ef5354;
  color: #fff;
  border: 0px;
  &:hover {
    background-color: #ec3435;
    color: #fff;
    border: 0px;
  }
`;

const StyledCancel = styled(Button)`
  margin: 0 0.2em;
  background-color: #b9b9b9;
  color: #fff;
  border: 0px;
  &:hover {
    background-color: #a8a8a8;
    color: #fff;
    border: 0px;
  }
`;

const StyledRow = styled(Row)`
  justify-content: space-between;
  padding: 0.7em 0.5em;
  background-color: #fcfcfc;
  border-bottom: 1px solid #ccc;
`;

const Icon = styled.i`
  font-size: 1.1em;
  color: #666;
  cursor: pointer;
`;

function ConfirmDelete({ togglemodal, handledelete, action }) {
  return (
    <Wrapper>
      <StyledRow>
        <Text thisfontsize="1.2em" margin="0">
          {action === "cancelPlan" && "Cancel Subscription"}
          {action === "deleteAccount" && "Delete Account"}
        </Text>
        <Icon onClick={togglemodal} className="fa fa-times" />
      </StyledRow>
      <Row justifycontent="center" margin="1.5em 0">
        <Text thisfontsize="1.1em" color="#666">
          Are you sure you want to cancel your plan?
        </Text>
      </Row>
      <Row justifycontent="center">
        <StyledCancel onClick={togglemodal} type="button">
          No
        </StyledCancel>
        <StyledDelete
          onClick={() => {
            handledelete(`${action}`);
          }}
          type="button"
        >
          {action === "cancelPlan" && "Cancel"}
          {action === "deleteAccount" && "Delete"}
        </StyledDelete>
      </Row>
    </Wrapper>
  );
}

export default class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <Backdrop>
        <StyledModal>
          <ConfirmDelete
            togglemodal={this.props.togglemodal}
            handledelete={this.props.handledelete}
            action={this.props.action}
          />
        </StyledModal>
      </Backdrop>
    );
  }
}
