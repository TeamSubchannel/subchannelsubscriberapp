import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import InfoForm from "./InfoForm";
import PaymentsForm from "./PaymentsForm";
import { Column, Title2, Text, Row } from "../../theme/index";

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
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      },
      loaded: false,
      editDetailsType: "",
      card: "",
      editCardDetails: false
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        values: {
          email: "william@subchannel.tv",
          password: "password"
        },
        loaded: true,
        card: "****-****-****-7880"
      };
    });
  }

  editDetails = e => {
    let type = e.target.id;
    this.setState(() => {
      return {
        editDetailsType: type
      };
    });
  };

  editCardDetails = () => {
    this.setState(() => {
      return {
        editCardDetails: true
      };
    });
  };

  handleCancel = () => {
    this.setState(() => {
      return {
        editCardDetails: false
      };
    });
  };

  render() {
    const loaded = this.state.loaded;
    return (
      <Div>
        <Header background="#777" />
        <Column>
          <Row margin="2em 0 1em 8em">
            <Title2 dark>Profile</Title2>
          </Row>
          {loaded && (
            <Column alignitems="center">
              <InfoForm
                values={this.state.values}
                editdetails={this.editDetails}
                editdetailstype={this.state.editDetailsType}
              />
              <PaymentsForm
                card={this.state.card}
                editcarddetails={this.state.editCardDetails}
                editcard={this.editCardDetails}
                handlecancel={this.handleCancel}
              />
              <Hr title="Accounts" />
            </Column>
          )}
        </Column>
      </Div>
    );
  }
}

export default Profile;
