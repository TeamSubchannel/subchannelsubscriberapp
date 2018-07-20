import React, { Component } from "react";
import styled from "styled-components";
import { Title2 } from "../theme/index";
import { Link } from "react-router-dom";
import DropdownModal from "../components/DropdownModal";
import Avatar from "../components/Avatar";
import { withRouter } from "react-router-dom";

const Div = styled.div.attrs({
  background: props => props.background
})`
  width: 100%;
  background: ${props => props.background || "rgba(0, 0, 0, 0)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const StyledTitle2 = styled(Title2)`
  margin-left: 0.5em;
`;

class Header extends Component {
  // getInitials = () => {
  //   if (this.props.userDetails.get("name", new Map())) {
  //     let name = `${this.props.userDetails.getIn(
  //       ["name", "firstName"],
  //       ""
  //     )} ${this.props.userDetails.getIn(["name", "lastName"], "")}`;
  //     let initials = name.match(/\b\w/g) || [];
  //     initials = (
  //       (initials.shift() || "") + (initials.pop() || "")
  //     ).toUpperCase();
  //     return initials;
  //   }
  // };

  onClickOption = val => {
    this.props.history.push(val.link);
  };

  getOptions = () => {
    return [
      {
        label: "Account",
        link: "/profile",

        iconClassName: "fa fa-user-circle",
        onClick: this.onClickOption
      },
      {
        label: "Help",
        link: "/",

        iconClassName: "fa fa-question-circle",
        onClick: this.onClickOption
      },

      {
        label: "Logout",
        link: "/login",
        color: "#f2451a",
        iconClassName: "ace-icon fa fa-power-off",
        onClick: this.logout
      }
    ];
  };

  render() {
    return (
      <Div background={this.props.background}>
        <Link to="/">
          <StyledTitle2>Logo</StyledTitle2>
        </Link>
        <Avatar
          initials="WW"
          background="#714053"
          render={display => (
            <DropdownModal options={this.getOptions()} display={display} />
          )}
        />
      </Div>
    );
  }
}

export default withRouter(Header);
