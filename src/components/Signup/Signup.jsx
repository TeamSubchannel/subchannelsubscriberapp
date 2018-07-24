import React, { Component } from "react";
import SignupForm from "./SignupForm";
import Payment from "./Payment";

export const STAGEONE = "STAGEONE";
export const STAGETWO = "STAGETWO";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stageOne: true,
      stageTwo: false,
      values: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  navigate = (values, stage) => {
    this.setState({
      stageOne: stage === STAGEONE,
      stageTwo: stage === STAGETWO,
      values: { ...this.state.values, ...values }
    });
  };

  render() {
    const { stageOne, stageTwo } = this.state;
    return (
      <div>
        {stageOne && (
          <SignupForm
            handleclick={this.props.handleclick}
            navigate={this.navigate}
            values={this.state.values}
          />
        )}
        {stageTwo && (
          <Payment
            frequency={"Monthly"}
            cost={"$3.99"}
            navigate={this.navigate}
            values={this.state.values}
          />
        )}
      </div>
    );
  }
}

export default Signup;
