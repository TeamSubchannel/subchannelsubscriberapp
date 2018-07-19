import React, { Component } from "react";
import { Button, Row } from "../theme/index";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

// Methods
const handleBlur = () => {
  console.log("[blur]");
};
const handleFocus = () => {
  console.log("[focus]");
};
const handleReady = () => {
  console.log("[ready]");
};

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

class Form extends Component {
  //   handleSubmit = ev => {
  //     ev.preventDefault();
  //     if (this.props.stripe) {
  //       this.props.stripe.createToken().then(payload => {
  //         let lastFour = payload.token.card.last4;
  //         this.props.grablastfour(lastFour);
  //         this.props.addcard({ stripeToken: payload.token.id }).then(action => {
  //           if (action.type === ADD_CARD_SUCCESS) {
  //             console.log("Card Details:", action.data);
  //           }
  //         });
  //       });
  //     } else {
  //       console.log("Stripe.js hasn't loaded yet.");
  //     }
  //   };

  handleChange = err => {
    if (err.error) {
      this.setState({
        errors: err.error.message
      });
    }
  };
  render() {
    return (
      <form
        style={{ width: "100%", margin: ".2em 0" }}
        onSubmit={this.handleSubmit}
      >
        <CardElement
          onBlur={handleBlur}
          onChange={this.handleChange}
          onFocus={handleFocus}
          onReady={handleReady}
          {...style()}
        />
        <Row margin=".5em 0 0 0">
          <Button margin=".5em .5em 0 0" type="submit" save>
            Add
          </Button>
          <Button
            type="button"
            onClick={this.props.handleclick}
            margin=".5em 0 0 0"
            cancel
          >
            Cancel
          </Button>
        </Row>
      </form>
    );
  }
}
const CardForm = injectStripe(Form);

function AddCardForm(props) {
  return (
    <StripeProvider apiKey="pk_test_htmxXHDmuQbnkRcFQirpanLZ">
      <Elements>
        <CardForm
          grablastfour={props.grablastfour}
          handleclick={props.handleclick}
          addcard={props.addCard}
        />
      </Elements>
    </StripeProvider>
  );
}
export default AddCardForm;
