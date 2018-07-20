import React, { Component } from "react";
import styled from "styled-components";
import { Title2, Column, Row, Text, Label, Button } from "../../theme/index";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  PostalCodeElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

const handleBlur = () => {
  console.log("[blur]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

const StyledCardNumberElement = styled(CardNumberElement)`
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  display: block;
  margin: 0.5em 0;
  min-width: 285px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
`;

const StyledCardExpiryElement = styled(CardExpiryElement)`
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  display: block;
  margin: 0.5em 0.35em;
  min-width: 80px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
`;

const StyledCardCVCElement = styled(CardCVCElement)`
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  display: block;
  margin: 0.5em 0.35em;
  min-width: 50px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
`;

const StyledPostalCodeElement = styled(PostalCodeElement)`
  border: 1px solid #ccc;
  background-color: #f6f6f6;
  display: block;
  margin: 0.5em 0.35em;
  min-width: 80px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: "Source Code Pro", monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
`;

const style = () => {
  return {
    style: {
      base: {
        fontFamily: "Montserrat, sans-serif",
        letterSpacing: ".2em",
        margin: ".5em 0",
        "::placeholder": {
          color: "#666"
        }
      },
      invalid: {
        color: "#9e2146"
      },
      complete: {
        color: "#019095"
      }
    }
  };
};

class SplitForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(payload => console.log("[token]", payload));
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  handleChange = err => {
    if (err.error) {
      this.setState({
        errors: err.error.message
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title2 fontsize="2.2em" dark margin=".7em 0 .7em 1em">
          Payment
        </Title2>
        <Column alignitems="center">
          <Row justifycontent="space-between" width="80%" alignitems="center">
            <Text fontweight="600">{this.props.frequency}</Text>
            <Text>{this.props.cost}</Text>
          </Row>
          <Row width="80%" margin=".8em 0">
            <Label>
              Card number
              <StyledCardNumberElement
                onBlur={handleBlur}
                onChange={this.handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...style()}
              />
            </Label>
          </Row>
          <Row
            justifycontent="space-around"
            alignitems="center"
            width="80%"
            margin=".8em 0 .4em 0"
          >
            <Label>
              Expiration
              <StyledCardExpiryElement
                onBlur={handleBlur}
                onChange={this.handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...style()}
              />
            </Label>
            <Label>
              CVC
              <StyledCardCVCElement
                onBlur={handleBlur}
                onChange={this.handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...style()}
              />
            </Label>
            <Label>
              Postal code
              <StyledPostalCodeElement
                onBlur={handleBlur}
                onChange={this.handleChange}
                onFocus={handleFocus}
                onReady={handleReady}
                {...style()}
              />
            </Label>
          </Row>
          <Button signup>
            SIGN IN
            <span>
              <i className="fa fa-chevron-right" />
            </span>
          </Button>
        </Column>
      </form>
    );
  }
}
const Form = injectStripe(SplitForm);

function Payment(props) {
  return (
    <StripeProvider apiKey="pk_test_htmxXHDmuQbnkRcFQirpanLZ">
      <Elements>
        <Form frequency={props.frequency} cost={props.cost} />
      </Elements>
    </StripeProvider>
  );
}
export default Payment;
