import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import { Column, Title2, Text } from "../../theme/index";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Hr = ({ title }) => (
  <div style={{ width: "70%" }}>
    <Text>{title}</Text>
    <hr />
  </div>
);

class Profile extends Component {
  render() {
    return (
      <Div>
        <Header background="#777" />
        <Column>
          <Title2 dark>Profile</Title2>
          <Column alignitems="center">
            <Hr title="Info" />
            <Hr title="Payments" />
            <Hr title="Accounts" />
          </Column>
        </Column>
      </Div>
    );
  }
}

export default Profile;
