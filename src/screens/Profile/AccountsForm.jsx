import React from "react";
import styled from "styled-components";
import { Button, Text } from "../../theme/index";

const Div = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Hr = ({ title }) => (
  <div style={{ width: "100%" }}>
    <Text>{title}</Text>
    <hr />
  </div>
);

export default function AccountsForm({ togglemodal }) {
  return (
    <Div>
      <Hr title="Account" />
      <Button
        id="cancelPlan"
        type="button"
        onClick={togglemodal}
        extralarge
        backgroundcolor="#ccc"
        hovercolor="#ddd"
      >
        Cancel Subscription
      </Button>
      <Button
        id="deleteAccount"
        type="button"
        onClick={togglemodal}
        extralarge
        backgroundcolor="#EF525B"
        hovercolor="#f27178"
      >
        Delete Account
      </Button>
    </Div>
  );
}
