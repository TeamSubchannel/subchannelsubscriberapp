import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import InfoForm from "./InfoForm";
import PaymentsForm from "./PaymentsForm";
import AccountsForm from "./AccountsForm";
import AlertModal from "../../shared/AlertModal";
import { Column, Title2, Row } from "../../theme/index";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

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
      editCardDetails: false,
      isOpen: false,
      action: ""
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

  handleSubmit = values => {
    this.setState(
      () => {
        return {
          values,
          editDetailsType: ""
        };
      },
      () => {
        console.log(this.state.values);
      }
    );
  };

  handleCancel = () => {
    this.setState(() => {
      return {
        editCardDetails: false
      };
    });
  };

  handleDelete = action => {
    console.log(action);
    this.setState(() => {
      return {
        isOpen: !this.state.isOpen
      };
    });
  };

  toggleModal = e => {
    let type = e.target.id;
    this.setState(() => {
      return {
        isOpen: !this.state.isOpen,
        action: type
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
                handlesubmit={this.handleSubmit}
              />
              <PaymentsForm
                card={this.state.card}
                editcarddetails={this.state.editCardDetails}
                editcard={this.editCardDetails}
                handlecancel={this.handleCancel}
              />
              <AccountsForm togglemodal={this.toggleModal} />
            </Column>
          )}
        </Column>
        <AlertModal
          show={this.state.isOpen}
          togglemodal={this.toggleModal}
          handledelete={this.handleDelete}
          action={this.state.action}
        />
      </Div>
    );
  }
}

export default Profile;
