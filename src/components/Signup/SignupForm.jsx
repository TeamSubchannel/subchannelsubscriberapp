import React, { Component } from "react";
import { Formik } from "formik";
import { STAGETWO } from "./Signup";
import {
  verificationEmailCheck,
  VERIFICATION_EMAIL_CHECK_SUCCESS
} from "./redux/actions";
import { connect } from "react-redux";
import {
  Input,
  Button,
  Label,
  Text,
  Title2,
  UserWarn,
  Row,
  Column
} from "../../theme/index";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  render() {
    const { navigate, values, verificationEmailCheck } = this.props;

    return (
      <div>
        <Formik
          enableReinitialize
          initialValues={values}
          validate={values => {
            let errors = {};
            let regex = /[^a-zA-Z0-9!]/g;
            if (!values.email) {
              errors.email = "Email is required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "A password is required";
            } else if (regex.test(values.password)) {
              errors.password = "Only A-Z, a-z, 0-9, ! accepted";
            } else if (values.password.length < 6) {
              errors.password = "Password must be 6 characters";
            }

            if (!values.name) {
              errors.name = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            verificationEmailCheck("Subchannel", values.email)
              .then(action => {
                if (action.type === VERIFICATION_EMAIL_CHECK_SUCCESS) {
                  navigate(values, STAGETWO);
                  setSubmitting(true);
                } else {
                  this.setState({ error: action.response.data }, () => {
                    console.log(this.state.error);
                  });
                  setSubmitting(false);
                }
              })
              .catch(err => {
                setSubmitting(false);
                console.log("Error Logging in", err);
              });
          }}
          render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <Title2 fontsize="2.2em" dark margin=".7em 0 .7em 1em">
                Get started
              </Title2>
              <Row style={{ position: "relative" }}>
                {/* {this.state.error && (
                  <UserWarn left="0">
                    <Text color="red" thisfontsize=".9em">
                      {this.state.error}
                    </Text>
                  </UserWarn>
                )} */}
              </Row>
              <Column alignitems="center">
                <Row>
                  <Label>
                    Full Name *
                    {touched.name &&
                      errors.name && (
                        <UserWarn left="6em">
                          <Text color="red" fontsize="1em">
                            {errors.name}
                          </Text>
                        </UserWarn>
                      )}
                    <Input
                      margin=".8em 0"
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      border={touched.name && errors.name && "1px solid red"}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label>
                    Email *
                    {touched.email &&
                      errors.email && (
                        <UserWarn left="4em">
                          <Text color="red" fontsize="1em">
                            {errors.email}
                          </Text>
                        </UserWarn>
                      )}
                    <Input
                      margin=".8em 0"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      border={touched.email && errors.email && "1px solid red"}
                    />
                  </Label>
                </Row>
                <Row>
                  <Label>
                    Password *
                    {touched.password &&
                      errors.password && (
                        <UserWarn left="6em">
                          <Text color="red" fontsize="1em">
                            {errors.password}
                          </Text>
                        </UserWarn>
                      )}
                    <Input
                      margin=".8em 0"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      border={
                        touched.password && errors.password && "1px solid red"
                      }
                    />
                  </Label>
                </Row>
                <Button signup type="submit" disabled={isSubmitting}>
                  NEXT
                  <span>
                    <i className="fa fa-chevron-right" />
                  </span>
                </Button>
              </Column>
              <Row
                alignitems="center"
                padding="0 2em"
                margin=".8em 0"
                justifycontent="space-between"
              >
                <Text>Forgot Password</Text>

                <Text
                  styled
                  id="login"
                  color="#019095"
                  onClick={this.props.handleclick}
                >
                  Login
                </Text>
              </Row>
            </form>
          )}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { verificationEmailCheck }
)(SignupForm);
