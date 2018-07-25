import React, { Component } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import InfoForm from "./InfoForm";
import PaymentsForm from "./PaymentsForm";
import AccountsForm from "./AccountsForm";
import AlertModal from "../../shared/AlertModal";
import { Column, Title2, Row } from "../../theme/index";
import { connect } from "react-redux";
import {
  fetchProfile,
  updateProfile,
  deleteProfile,
  DELETE_PROFILE_SUCCESS,
  UPDATE_PROFILE_SUCCESS
} from "./redux/actions";
import { profileData } from "./redux/selector";
import { withRouter } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
`;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDetailsType: "",
      card: "",
      editCardDetails: false,
      isOpen: false,
      action: ""
    };
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  componentWillReceiveProps(props) {}

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
    this.props.updateProfile(values).then(action => {
      if (action.type === UPDATE_PROFILE_SUCCESS) {
        this.props.fetchProfile();
      } else {
        this.setState({ error: action.response.data });
      }
      this.setState(() => {
        return {
          editDetailsType: ""
        };
      });
    });
  };

  handleCancel = () => {
    this.setState(() => {
      return {
        editCardDetails: false
      };
    });
  };

  handleDelete = (action, values) => {
    if (action === "deleteAccount") {
      this.props.deleteProfile(values).then(action => {
        if (action.type === DELETE_PROFILE_SUCCESS) {
          this.setState(
            () => {
              return {
                isOpen: !this.state.isOpen
              };
            },
            () => {
              this.props.history.push("/");
              localStorage.clear();
            }
          );
        } else {
          this.setState({ error: action.response.data }, () => {
            console.log(this.state.error);
          });
        }
      });
    }
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
    return (
      <Div>
        <Header background="#777" />
        <Column>
          <Row margin="2em 0 1em 8em">
            <Title2 dark>Profile</Title2>
          </Row>

          <Column alignitems="center">
            <InfoForm
              email={this.props.email}
              editdetails={this.editDetails}
              editdetailstype={this.state.editDetailsType}
              handleSubmit={this.handleSubmit}
            />
            <PaymentsForm
              card={this.state.card}
              editcarddetails={this.state.editCardDetails}
              editcard={this.editCardDetails}
              handlecancel={this.handleCancel}
            />
            <AccountsForm togglemodal={this.toggleModal} />
          </Column>
        </Column>
        <AlertModal
          show={this.state.isOpen}
          togglemodal={this.toggleModal}
          handledelete={this.handleDelete}
          action={this.state.action}
          error={this.state.error && this.state.error}
        />
      </Div>
    );
  }
}

export default withRouter(
  connect(
    profileData,
    { fetchProfile, updateProfile, deleteProfile }
  )(Profile)
);
